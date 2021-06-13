const productController = {};
const product = require('./../../models/product/productModel');
const pg = require('./../../models/index');
const queries = require('./../../config/queries');

productController.getAllProduct = async (req, res) => {
    pg.db.many(queries.getAllProducts)
    .then((r)=>{
        res.status(200).json({
            msg: r,
            status: 'ok',
            statusCode: 200
        })
    })
    .catch((err)=>{
        res.status(404).json({
            msg: err,
            status: 'error',
            statusCode: 404
        })
    })
}

productController.getProduct = async (req, res) => {
    pg.db.many(queries.getProduct(req.params.id))
    .then((r)=>{
        res.status(200).json({
            status: 'ok',
            msg: r,
            statusCode:200
        });
    })
    .catch((err)=>{
        res.status(404).json({
            status: 'Not found',
            statusCode: 404
        })
    })
}

productController.insertProduct = async(req, res) => {
    const query = pg.pgp.helpers.insert(req.body, product(pg.pgp))
    await pg.db.any(query)
    .then((r)=>{
        res.status(200).json({
            status: 'ok',
            msg: r,
            statusCode: 200
        })
    })
    .catch((err)=>{
        res.status(400).json({
            status: 'ok',
            msg: err,
            statusCode: 400
        })
    })
}

productController.updateProduct = (req, res) => {
    const query = pg.pgp.helpers.update(req.body, product(pg.pgp)) + ` WHERE product_barcode = '${req.params.id}'`
    pg.db.oneOrNone(query)
    .then((r)=>{
        res.status(200).json({
            statusCode:200,
            msg: r,
            status: 'ok'
        })
    })
    .catch((err)=>{
        res.status(404).json({
            status: 'error',
            msg: err,
            statusCode: '404'
        })
    })
}

productController.deleteProduct = async(req, res) => {
    await pg.db.any(queries.deleteProduct(req.params.id))
    .then((r)=>{
        res.status(200).json({
            status: 'ok',
            msg: r,
            statusCode: 200
        })
    })
    .catch((err)=>{
        res.status(404).json({
            status: 'Not found',
            msg: err,
            statusCode: 404
        })
    })
}


module.exports = productController;