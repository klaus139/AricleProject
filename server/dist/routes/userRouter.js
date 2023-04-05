"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middleware/auth"));
const userCtrl_1 = __importDefault(require("../controller/userCtrl"));
const router = express_1.default.Router();
router.patch('/user', auth_1.default, userCtrl_1.default.updateUser);
router.patch('/reset-password', auth_1.default, userCtrl_1.default.resetPassword);
exports.default = router;