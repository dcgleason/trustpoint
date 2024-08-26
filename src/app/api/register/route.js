import { NextResponse } from 'next/server';
import { firestore } from '../../lib/firebase'; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
  try {
    const body = await request.json();

    // Add a new document with a generated ID
    const usersCollection = collection(firestore, "users");
    const docRef = await addDoc(usersCollection, {
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

    return NextResponse.json({ message: 'User registered successfully', userId: docRef.id }, { status: 201 });
  } catch (error) {
    console.error("Error adding document: ", error);
    return NextResponse.json({ message: 'Error registering user', error: error.message }, { status: 500 });
  }
}