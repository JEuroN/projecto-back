const userController = {};
const pg = require('./../../models/index');
const userModel = require('./../../models/user/userModel');
const {encrypt, compare} = require('./../../utils/bcrypt');
const {createToken, verifyToken} = require('./../../utils/jwt');
const queries = require('./../../config/queries');

userController.getUser = async(req, res) => {
    const {user_username, user_password} = req.body
    pg.db.one(queries.getUser(user_username))
    .then(async (r)=>{
        const compare_result = await compare(user_password, r.user_password);
        if(compare_result){
            let token = await createToken(user_username);
            res.status(200).json({
                statusCode: 200,
                status: 'ok',
                msg: token
            })
        }else{
            res.status(404).json({
                status: 'not found',
                statusCode: 404
            })
        }
    })
    .catch((err)=>{
        res.status(404).json({
            status: 'not found',
            statusCode: 404
        })
    })
}

userController.insertUser = async(req, res) => {
    const {body} = req;
    body.user_password = await encrypt(req.body.user_password, 10);
    const query = pg.pgp.helpers.insert(body, userModel(pg.pgp));
    pg.db.any(query)
    .then(async (r)=>{
        let token = await createToken(body.user_username);
        res.status(200).json({
            status: 'created',
            statusCode: 201,
            msg: token
        })
    })
    .catch((err)=>{
        console.log('error a')
        res.status(500).json({
            status: 'error',
            statusCode: 500,
            msg: err
        })
    })
}

userController.updateUser = async(req, res) => {
    const {user_username, user_firstname, user_lastname} = req.body
    req.body.user_password = await encrypt(req.body.user_password, 10);
    const query = pg.pgp.helpers.update(req.body, userModel(pg.pgp)) + queries.updateUser(user_username, user_firstname, user_lastname); 
    pg.db.any(query)
    .then((r)=>{
        res.status(200).json({
            status: 'ok',
            statusCode: 200,
        })
    })
    .catch((err)=>{
        res.status(400).json({
            status: 'bad request',
            statusCode: 400,
        })
    })
}

userController.checkToken = async(req, res) => {
    const token = verifyToken(req.body.token)
    console.log(token);
    if(token){
        res.status(200).json({
            status: 'ok',
            statusCode: 200
        })
    }else{
        res.status(401).json({
            status: 'forbidden',
            statusCode: 401
        })
    }
}

module.exports = userController;