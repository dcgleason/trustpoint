import { NextResponse } from 'next/server';
import { firestore } from '../../lib/firebase'; // Adjust the path as needed
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request) {
  try {
    const body = await request.json();

    // Add a new document with a generated ID to a 'contacts' collection
    const contactsCollection = collection(firestore, 'contacts');
    const docRef = await addDoc(contactsCollection, {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(), // Add a timestamp for when the contact was submitted
    });

    console.log('Document written with ID: ', docRef.id);

    return NextResponse.json({ message: 'Contact form submitted successfully', contactId: docRef.id }, { status: 201 });
  } catch (error) {
    console.error('Error adding document: ', error);
    return NextResponse.json({ message: 'Error submitting contact form', error: error.message }, { status: 500 });
  }
}