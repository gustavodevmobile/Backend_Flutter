import { google } from "googleapis";
import "dotenv/config";
import nodemailer from "nodemailer";

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

const createTransporter = async () => {
  const accessToken = await oauth2Client.getAccessToken();
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });
 
};

export const feedbacks = async (req, reply) => {
  const { message } = req.body;
  try {
    const transporter = await createTransporter();
    

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "gucorrea.dev@outlook.com",
      subject: "Novo feedback recebido",
      text: message,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado com sucesso!", result);
  } catch (error) {
    
    console.error("Erro ao enviar e-mail:", error.message);
  }
};
