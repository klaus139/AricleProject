import {Twilio} from 'twilio';

const accountSID = `${process.env.TWILIO_ACCOUNT_SID}`;
const authToken = `${process.env.TWILIO_AUTH_TOKEN}`;
const from = `${process.env.TWILIO_PHONE_NUMBER}`;
const client = new Twilio(accountSID, authToken)

export const sendSms = (to: string, body: string, txt: string) => {
    try {
        client.messages
        .create({
          body: `Olean Project ${txt} - ${body}`,
          from,
          to
        })
        .then(message => console.log(message.sid));
    
      } catch (err) {
        console.log(err)
      }
}