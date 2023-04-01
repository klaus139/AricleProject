"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSms = void 0;
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
