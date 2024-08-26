import { NextResponse } from 'next/server';
import { firestore } from '../../lib/firebase'; // Adjust the import path as needed
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
  try {
    const body = await request.json();

    // Add a new document with a generated ID in the "waitlist" collection
    const waitlistCollection = collection(firestore, "waitlist");
    const docRef = await addDoc(waitlistCollection, {
      email: body.email,
      city: body.city,
      state: body.state,
      country: body.country,
      timestamp: new Date() // Adding a timestamp for when the entry was created
    });

    console.log("Waitlist document written with ID: ", docRef.id);

    return NextResponse.json({ 
      message: 'Waitlist entry added successfully', 
      entryId: docRef.id 
    }, { status: 201 });
  } catch (error) {
    console.error("Error adding waitlist document: ", error);
    return NextResponse.json({ 
      message: 'Error adding waitlist entry', 
      error: error.message 
    }, { status: 500 });
  }
}