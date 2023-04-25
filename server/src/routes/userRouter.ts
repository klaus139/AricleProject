import express from 'express';
import auth from '../middleware/auth';
import userCtrl from '../controller/userCtrl';
import { validRegister } from '../middleware/valid';

const router = express.Router();

router.patch('/user', auth, userCtrl.updateUser);
router.patch('/reset-password', auth, userCtrl.resetPassword);
router.patch('/user/:id', userCtrl.getUser)
router.get('/users', userCtrl.getAllUsers)

export default router;
