import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  
  // Define file path for users.json
  const filePath = path.join(process.cwd(), 'data', 'users.json');
  
  // Read existing users from the file
  let users = [];
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    users = JSON.parse(fileContents);
  }
  
  // Add new user to the array
  users.push(body);
  
  // Write updated users array back to the file
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  
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
    subject: 'New User Registered',
    text: `A new user has registered with the following details:\n\n
           Name: ${body.name}\n
           Email: ${body.email}\n
           Location: ${body.location}\n
           Gender: ${body.gender}\n
           Years Learning Code: ${body.yearsLearningCode}\n
           Personality Description: ${body.personalityDescription}\n
           Age: ${body.age}\n
           Occupation: ${body.occupation}\n
           One Year Goal: ${body.oneYearGoal}\n
           Five Year Goal: ${body.fiveYearGoal}\n
           Preferred Spoken Language: ${body.preferredSpokenLanguage}\n
           I want to learn: ${body.learn}\n
           Skills: ${body.skills.map(skill => `\n  Skill: ${skill.skill}, Years: ${skill.years}`).join('')}\n`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return NextResponse.json({ message: 'Error registering user, email not sent' }, { status: 500 });
    } else {
      console.log('Email sent:', info.response);
      return NextResponse.json({ message: 'User registered successfully' }, { status: 200 });
    }
  });
}