import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
import dbConnect from './config/database';

//import routes
import routes from './routes/index'


//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
    res.json({ msg: 'hello from klaus'})
})
app.use('/api', routes.authRouter)

//connect database
dbConnect();


// server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
})