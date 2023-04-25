import express,{Request, Response, NextFunction} from 'express';
import blogCtrl from '../controller/blogCtrl';
import auth from '../middleware/auth';
// import multer from 'multer';
// import path from 'path';
// // Set up multer storage configuration
// // Set up multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // Set the destination folder for the uploaded PDF file
//     cb(null, 'public/pdfFiles');
//   },
//   filename: (req, file, cb) => {
//     // Generate a unique file name for the uploaded PDF file
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// // Set up multer configuration options
// const upload = multer({
//   storage: storage,
//   // limits: {
//   //   fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
//   // },
//   fileFilter: (req, file, cb) => {
//     // Check the file type of the uploaded PDF file
//     if (path.extname(file.originalname).toLowerCase() === '.pdf') {
//       cb(null, true);
//     } else {
//       cb(new Error('Only PDF files are allowed'));
//     }
//   }
// });

const router = express.Router();

router.post('/blog', auth, blogCtrl.createBlog);
router.get('/home/blogs', blogCtrl.getHomeBlogs);
router.get('/blogs/category/:id', blogCtrl.getBlogsByCategory)

router.get('/blogs/user/:id', blogCtrl.getBlogsByUser)
router.get('/blog/:id', blogCtrl.getBlog);

router.route('/blog/:id')
  .get(blogCtrl.getBlog)
  .put(auth, blogCtrl.updateBlog)
  .delete(auth, blogCtrl.deleteBlog)

router.get('/search/blogs', blogCtrl.searchBlogs)

// Use the multer middleware to handle image file uploads
// router.post('/upload', upload.single('pdf'), (req, res) => {
//   // Send a response indicating the uploaded PDF file was successful
//   res.json({
//     success: true,
//     message: 'PDF uploaded successfully'
//   });
// });



export default router;
