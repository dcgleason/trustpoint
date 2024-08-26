import { NextResponse } from 'next/server';
import { firestore } from '../../../lib/firebase'; // Adjust the import path as needed
import { collection, addDoc } from "firebase/firestore"; 

export async function POST(request) {
  const body = await request.json();

  try {
    // Add a new document with a generated ID
    const docRef = await addDoc(collection(firestore, "users"), {
      name: body.name,
      email: body.email,
      location: body.location,
      gender: body.gender,
      yearsLearningCode: body.yearsLearningCode,
      personalityDescription: body.personalityDescription,
      age: body.age,
      occupation: body.occupation,
      oneYearGoal: body.oneYearGoal,
      fiveYearGoal: body.fiveYearGoal,
      preferredSpokenLanguage: body.preferredSpokenLanguage,
      learn: body.learn,
      skills: body.skills,
      availability: body.availability,
    });
    console.log("Document written with ID: ", docRef.id);

    return NextResponse.json({ message: 'User registered successfully' }, { status: 200 });
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json({ message: 'Error registering user' }, { status: 500 });
  }
}