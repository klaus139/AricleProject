"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogCtrl_1 = __importDefault(require("../controller/blogCtrl"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/blog', auth_1.default, blogCtrl_1.default.createBlog);
router.get('/home/blogs', blogCtrl_1.default.getHomeBlogs);
exports.default = router;