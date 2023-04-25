"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogCtrl_1 = __importDefault(require("../controller/blogCtrl"));
const auth_1 = __importDefault(require("../middleware/auth"));
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
const router = express_1.default.Router();
router.post('/blog', auth_1.default, blogCtrl_1.default.createBlog);
router.get('/home/blogs', blogCtrl_1.default.getHomeBlogs);
router.get('/blogs/category/:id', blogCtrl_1.default.getBlogsByCategory);
router.get('/blogs/user/:id', blogCtrl_1.default.getBlogsByUser);
router.get('/blog/:id', blogCtrl_1.default.getBlog);
router.route('/blog/:id')
    .get(blogCtrl_1.default.getBlog)
    .put(auth_1.default, blogCtrl_1.default.updateBlog)
    .delete(auth_1.default, blogCtrl_1.default.deleteBlog);
router.get('/search/blogs', blogCtrl_1.default.searchBlogs);
// Use the multer middleware to handle image file uploads
// router.post('/upload', upload.single('pdf'), (req, res) => {
//   // Send a response indicating the uploaded PDF file was successful
//   res.json({
//     success: true,
//     message: 'PDF uploaded successfully'
//   });
// });
exports.default = router;
