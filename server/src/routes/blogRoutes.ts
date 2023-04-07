import express from 'express';
import blogCtrl from '../controller/blogCtrl';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/blog', auth, blogCtrl.createBlog);
router.get('/home/blogs', blogCtrl.getHomeBlogs)

export default router;
