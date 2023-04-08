import mongoose from 'mongoose'
import { IBlog } from '../config/interface'

const blogSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'user' },
  title: {
    type: String,
    require: true,
    trim: true,
    minLength: 10,
    maxLength: 100
  },
  content: {
    type: String,
    require: true,
    minLength: 1000
  },
  description: {
    type: String,
    require: true,
    trim: true,
    minLength: 50,
    maxLength: 300
  },
  thumbnail:{
    type: String,
    require: true
  },
  category: { type: mongoose.Types.ObjectId, ref: 'category' },

}, {
  timestamps: true
})


const Blog =  mongoose.model<IBlog>("Blog", blogSchema);
export default Blog;