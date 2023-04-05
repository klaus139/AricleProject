"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controller/authController"));
const valid_1 = require("../middleware/valid");
const router = express_1.default.Router();
router.post('/register', valid_1.validRegister, authController_1.default.register);
router.post('/active', authController_1.default.activeAccount);
router.post('/login', authController_1.default.login);
router.get('/logout', authController_1.default.logout);
router.get('/refresh_token', authController_1.default.refreshToken);
router.post('/login_sms', authController_1.default.loginSMS);
router.post('/admin-register', authController_1.default.adminRegister);
exports.default = router;
