import express,{Request, Response, NextFunction} from 'express';
import blogCtrl from '../controller/blogCtrl';
import auth from '../middleware/auth';


const router = express.Router()


router.post('/blog', auth, blogCtrl.createBlog)
router.post('/slug', blogCtrl.updateSlug)
//router.get('/blogs', blogCtrl.getAllBlog)


router.get('/home/researchs', blogCtrl.getHomeBlogs)




router.get('/researchs/category/:id', blogCtrl.getBlogsByCategory)



router.get('/researchs/user/:id', blogCtrl.getBlogsByUser)

router.route('/research/:id')
  
  .put(auth, blogCtrl.updateBlog)
  .delete(auth, blogCtrl.deleteBlog)
router.route('/project/:slug').get(blogCtrl.getBlog)

router.get('/search/blogs', blogCtrl.searchBlogs)






export default router;
