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
Object.defineProperty(exports, "__esModule", { value: true });
exports.smsOTP = exports.sendSms = void 0;
const twilio_1 = require("twilio");
const accountSID = `${process.env.TWILIO_ACCOUNT_SID}`;
const authToken = `${process.env.TWILIO_AUTH_TOKEN}`;
const from = `${process.env.TWILIO_PHONE_NUMBER}`;
const client = new twilio_1.Twilio(accountSID, authToken);
const sendSms = (to, body, txt) => {
    try {
        client.messages
            .create({
            body: `Olean Project ${txt} - ${body}`,
            from,
            to
        })
            .then(message => console.log(message.sid));
    }
    catch (err) {
        console.log(err);
    }
};
exports.sendSms = sendSms;
const smsOTP = (to, channrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        console.log(err);
    }
});
exports.smsOTP = smsOTP;
