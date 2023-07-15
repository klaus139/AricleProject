import express,{Request, Response, NextFunction} from 'express';
import blogCtrl from '../controller/blogCtrl';
import auth from '../middleware/auth';


const router = express.Router()


router.post('/blog', auth, blogCtrl.createBlog)
//router.get('/blogs', blogCtrl.getAllBlog)

router.get('/home/researchs', blogCtrl.getHomeBlogs)



router.get('/researchs/category/:id', blogCtrl.getBlogsByCategory)

router.get('/researchs/user/:id', blogCtrl.getBlogsByUser)

router.route('/research/:id')
  .get(blogCtrl.getBlog)
  .put(auth, blogCtrl.updateBlog)
  .delete(auth, blogCtrl.deleteBlog)

router.get('/search/blogs', blogCtrl.searchBlogs)






export default router;
