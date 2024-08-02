import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest){
    try{
        console.log("SMTP_HOST:", process.env.SMTP_HOST);
        console.log("SMTP_PORT:", process.env.SMTP_PORT);
        console.log("SMTP_USER:", process.env.SMTP_USER);
        console.log("SMTP_PASS:", process.env.SMTP_PASS);
        console.log("MY_EMAIL:", process.env.MY_EMAIL);
        console.log("hai");

        const { name, email, message } = await req.json();

        


        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          const mailOptions: Mail.Options = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: `New message from ${name} (${email})`,
            text: message,
          };

          await transporter.sendMail(mailOptions);
          return NextResponse.json({ status: 'OK' });
  
      
    } catch(error){
        console.error(error);
        return NextResponse.json({ status: 'Failed to send message' }, { status: 500 });
    }
}