import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
import dbConnect from './config/database';
import {SocketServer} from './config/socket'

//import routes
import routes from './routes/index'

import {createServer} from 'http'
import {Server, Socket} from 'socket.io'


//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

//socket.io
const http = createServer(app)
export const io = new Server(http)


io.on("connection", (socket: Socket) => SocketServer(socket))


//routes
// app.get('/', (req, res) => {
//     res.json({ msg: 'hello from klaus'})
// })
app.use('/api', routes);


//connect database
dbConnect();


// server listening
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
})