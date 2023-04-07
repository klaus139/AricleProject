import { Request, Response} from 'express';
import Blog from '../models/blogModel';
import { IReqAuth } from '../config/interface';

const blogCtrl = {
    createBlog: async (req: IReqAuth, res: Response) => {
        console.log(req.user, req.body)
        if(!req.user) return res.status(400).json({msg: 'Invalid Authentication'})

        try{
            const {title, content, description, thumbnail, category } = req.body

            const newBlog = new Blog({
                user: req.user._id,
                title: title.toLowerCase(),
                content,
                description,
                thumbnail,
                category,
        
            })

            await newBlog.save()
            res.json({newBlog})

        }catch(err: any){
            return res.status(500).json({msg: err.message})
        }
    },
    getHomeBlogs: async (req: Request, res: Response) => {
        try{
            const blogs = await Blog.find()
            res.json(blogs)
        }catch(err){
            console.log(err)
        }
    }
}

export default blogCtrl