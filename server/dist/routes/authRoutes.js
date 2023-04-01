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
exports.default = router;
