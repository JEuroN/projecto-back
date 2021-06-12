const {Router} = require('express');
const userController = require('./../../controllers/user/userController');

const router = Router();

//GetAll
router.get('/', userController.getAllUser);
//GetOne
router.get('/:id', userController.getUser);
//Save
router.post('/', userController.insertUser);
//Delete
router.delete('/:id', userController.deleteUser);
//Update
router.put('/:id', userController.updateUser);

module.exports = router;