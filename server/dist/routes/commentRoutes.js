"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentCtrl_1 = __importDefault(require("../controller/commentCtrl"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/comment', auth_1.default, commentCtrl_1.default.createComment);
router.get('/comment/blog/:id', commentCtrl_1.default.getComments);
exports.default = router;