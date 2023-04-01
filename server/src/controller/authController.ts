import express, {Request, Response} from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {generateAccessToken, generateActiveToken, generateRefreshToken} from '../config/generateToken'
import sendEmail from '../config/sendMail';
import { validPhone, validateEmail } from '../middleware/valid';


const CLIENT_URL = `${process.env.BASE_URL}`

const authCtrl = {
    register: async(req: Request, res: Response) => {
        try{
            const { name, account, password } = req.body;

            const user = await User.findOne({account})
            if(user) return res.status(400).json({msg: 'Email or phone number already exist.'})

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = {
                name, account, password: passwordHash
            }

            const active_token = generateActiveToken({newUser})
            
            const url = `${CLIENT_URL}/active/${active_token}`
            

            if(validateEmail(account)){
                sendEmail(account, url, 'verify your email address')
                return res.json({ msg: "success! please check your email to verify your account" })
            }

            
        } catch(err: any) {
            return res.status(500).json({msg: err.message})
        }

    }
}

export default authCtrl;