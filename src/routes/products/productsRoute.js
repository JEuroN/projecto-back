const {Router} = require('express');
const productController = require('../../controllers/products/productController');

const router = Router();

//GetAll
router.get('/', productController.getAllProduct);
//GetOne
router.get('/:id', productController.getProduct);
//InsertOne
router.post('/', productController.insertProduct);
//Delete
router.delete('/:id', productController.deleteProduct);
//Update
router.put('/:id', productController.updateProduct);


module.exports = router;