"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authRoutes_1 = __importDefault(require("./authRoutes"));
const userRouter_1 = __importDefault(require("./userRouter"));
const categoryRoutes_1 = __importDefault(require("./categoryRoutes"));
const blogRoutes_1 = __importDefault(require("./blogRoutes"));
const commentRoutes_1 = __importDefault(require("./commentRoutes"));
const routes = {
    authRouter: authRoutes_1.default,
    userRouter: userRouter_1.default,
    categoryRouter: categoryRoutes_1.default,
    blogRouter: blogRoutes_1.default,
    commentRouter: commentRoutes_1.default
};
exports.default = routes;
