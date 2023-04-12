import {combineReducers} from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import categories from './categoryReducer';
import homeBlogs from './homeBlogReducer';
import blogsCategory from './blogsCategoryReducer';
import otherInfo from './otherInfoReducers';
import blogsUser from './blogsUserReducer'
import comments from './commentReducer';
import socket from './socketReducer';

export default combineReducers({
    auth,
    alert,
    categories,
    homeBlogs,
    blogsCategory,
    otherInfo,
    blogsUser,
    comments,
    socket


})

