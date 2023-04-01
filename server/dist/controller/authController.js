"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = require("../config/generateToken");
const sendMail_1 = __importDefault(require("../config/sendMail"));
const valid_1 = require("../middleware/valid");
const CLIENT_URL = `${process.env.BASE_URL}`;
const authCtrl = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, account, password } = req.body;
            const user = yield userModel_1.default.findOne({ account });
            if (user)
                return res.status(400).json({ msg: 'Email or phone number already exist.' });
            const passwordHash = yield bcrypt_1.default.hash(password, 12);
            const newUser = {
                name, account, password: passwordHash
            };
            const active_token = (0, generateToken_1.generateActiveToken)({ newUser });
            const url = `${CLIENT_URL}/active/${active_token}`;
            if ((0, valid_1.validateEmail)(account)) {
                (0, sendMail_1.default)(account, url, 'verify your email address');
                return res.json({ msg: "success! please check your email to verify your account" });
            }
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    })
};
exports.default = authCtrl;
