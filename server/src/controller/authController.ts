import express, {Request, Response} from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {generateAccessToken, generateActiveToken, generateRefreshToken} from '../config/generateToken'
import sendEmail from '../config/sendMail';
import { validPhone, validateEmail } from '../middleware/valid';
import { sendSms } from '../config/sendSMS';
import { IDecodedToken, IUser } from '../config/interface';
import dotenv from 'dotenv'
dotenv.config()



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
            } else if(validPhone(account)){
                sendSms(account, url, "Verify your phone number")
                return res.json({ msg: 'Success! Please check your phone'})
            }

            
        } catch(err: any) {
            return res.status(500).json({msg: err.message})
        }

    },
    activeAccount: async(req: Request, res: Response) => {
        try {
          const { active_token } = req.body
    
          const decoded = <IDecodedToken>jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`)
    
          const { newUser } = decoded 
    
          if(!newUser) return res.status(400).json({msg: "Invalid authentication."})
          
          const user = await User.findOne({account: newUser.account})
          if(user) return res.status(400).json({msg: "Account already exists."})
    
          const new_user = new User(newUser)
    
          await new_user.save()
    
          res.json({msg: "Account has been activated!"})
    
        } catch (err: any) {
          return res.status(500).json({msg: err.message})
        }
    },
    login: async(req: Request, res: Response) => {
        try {
          const { account, password } = req.body
    
          const user = await User.findOne({account})
          if(!user) return res.status(400).json({msg: 'This account does not exist.'})
    
          // if user exists
          loginUser(user, password, res)
    
        } catch (err: any) {
          return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req: Request, res:Response) => {
        try{
            res.clearCookie('refreshtoken', {path: `/api/refresh_token`})
            return res.json({msg: 'Logged out!'})
        } catch(err: any) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken: async(req: Request, res: Response) => {
        try {
          const rf_token = req.cookies.refreshtoken
          if(!rf_token) return res.status(400).json({msg: 'Please login now!'})
          const decoded = <IDecodedToken>jwt.verify(rf_token, `${process.env.REFRESH_TOKEN_SECRET}`)
          if(!decoded.id) return res.status(400).json({msg: 'Please login now!'})

          const user = await User.findById(decoded.id).select("-password")
          if(!user) return res.status(400).json({msg: 'This account does not exist'})

          const access_token = generateAccessToken({id: user._id})
        //   console.log(user)
          res.json({access_token, user})
          
        } catch (err: any) {
          return res.status(500).json({msg: err.message})
        }
      },
    
}

const loginUser = async(user: IUser, password: string, res: Response) => {
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(500).json({msg: "password is incorrect"})

    const access_token = generateAccessToken({id: user._id})
    const refresh_token = generateRefreshToken({id: user._id})
    
    res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: `/api/refresh_token`,
        maxAge: 30*24*60*60*1000 // 30 days
    })

    res.json({
        msg: 'Login success!',
        access_token,
        user: { ...user._doc, password: ''}
    })
}

export default authCtrl;