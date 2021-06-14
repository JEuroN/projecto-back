const jwt = require('jsonwebtoken');

const createToken = async (username) => {
    const token = await new Promise((reject, resolve) => {
        jwt.sign({username}, 'aguacate',{expiresIn:3600}, (token, err)=>{
            if(err) reject(err);
            resolve(token);
        })
    })
    return token;
}

const verifyToken = (token) => {
    const verify = jwt.verify(token, 'aguacate', (err, token) =>{
        console.log(err, token);
        if(err) 
            return false;
        else 
            return true;
    })
    return verify;
}

module.exports = {createToken, verifyToken}