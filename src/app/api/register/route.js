import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const body = await request.json();
  
  const filePath = path.join(process.cwd(), 'data', 'users.json');
  
  let users = [];
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    users = JSON.parse(fileContents);
  }
  
  users.push(body);
  
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  
  return NextResponse.json({ message: 'User registered successfully' }, { status: 200 });
}