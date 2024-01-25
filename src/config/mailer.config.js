import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_CREDENTIALS_HOST,
    port: process.env.GMAIL_CREDENTIALS_PORT,
    secure: true,
    auth: {
        user: process.env.GMAIL_CREDENTIALS_EMAIL,
        pass: process.env.GMAIL_CREDENTIALS_PASS
    },
})

export default transporter;