import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();

  // Email setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
  });

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com',  // Replace with your email
    to: 'danny.c.gleason@gmail.com',  // Replace with your target email
    subject: `Coding Buddy: New Waitlist User`,
    text: `A new user has joined the waitlist with the following details:\n\n
           Email: ${body.email}\n
           City: ${body.city}\n
           State: ${body.state}\n
           Country: ${body.country}`
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Waitlist user added successfully' }, { status: 200 });
  } catch (error) {
    console.log('Error sending email:', error);
    return NextResponse.json({ message: 'Error adding waitlist user' }, { status: 500 });
  }
}