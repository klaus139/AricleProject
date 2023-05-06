import mongoose from 'mongoose'
import { IPayment } from '../config/interface'



const paymentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const Payment = mongoose.model<IPayment>("Payment", paymentSchema);
export default Payment;