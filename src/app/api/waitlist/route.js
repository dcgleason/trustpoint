import { NextResponse } from 'next/server';
import { firestore } from '../../../lib/firebase'; // Adjust the import path as needed
import { collection, addDoc } from "firebase/firestore"; 

export async function POST(request) {
  const body = await request.json();

  try {
    // Add a new document with a generated ID in the "waitlist" collection
    const docRef = await addDoc(collection(firestore, "waitlist"), {
      email: body.email,
      city: body.city,
      state: body.state,
      country: body.country,
    });
    console.log("Document written with ID: ", docRef.id);

    return NextResponse.json({ message: 'Waitlist user added successfully' }, { status: 200 });
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json({ message: 'Error adding waitlist user' }, { status: 500 });
  }
}