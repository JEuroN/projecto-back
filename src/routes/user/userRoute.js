const {Router} = require('express');
const userController = require('./../../controllers/user/userController');

const router = Router();

//GetOne
router.post('/Login', userController.getUser);
//Save
router.post('/Register', userController.insertUser);
//Update
router.put('/:id', userController.updateUser);
//CheckToken
router.post('/checkToken', userController.checkToken);

module.exports = router;