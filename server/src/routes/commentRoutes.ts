import express from 'express'
import commentCtrl from '../controller/commentCtrl'
import auth from '../middleware/auth'

const router = express.Router();

router.post('/comment', auth, commentCtrl.createComment)

router.get('/comment/blog/:id', commentCtrl.getComments)

export default router