'use server';

import { z } from 'zod';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { sendEmail } from '@/app/lib/mail';

const apiKey = process.env.API_KEY; // Replace this with your actual API key
const baseUrl = process.env.BASE_URL;

if (apiKey === undefined || baseUrl === undefined) {
  throw new Error('Please add your api key and base url to .env file');
}

const FormSchema = z.object({
  fullName: z
    .string({
      invalid_type_error: 'Please Provide full Name.',
    })
    .min(1, { message: 'Please enter full Name' }),
  email: z.string().email({ message: 'Invalid email address' }),
  description: z
    .string({
      invalid_type_error: 'Please enter description',
    })
    .min(3, { message: 'Please Provide at least few characters' }),
});

export type State = {
  errors?: {
    fullName?: string[];
    email?: string[];
    description?: string[];
  };
  message?: string | null;
};

export async function createContact(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = FormSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    description: formData.get('description'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Please fill out all the fields..',
    };
  }

  // Prepare data for insertion into the database
  const { fullName, email, description } = validatedFields.data;

  // Insert data into the database
  try {
    const res = await axios.post(
      `${baseUrl}/action/insertOne`,
      {
        dataSource: 'Cluster0',
        database: 'portfollioDB',
        collection: 'contacts',
        document: {
          fullName,
          email,
          description,
          createdAt: { $date: { $numberLong: Date.now().toString() } },
        },
      },
      {
        headers: {
          apiKey: apiKey,
          'Content-Type': 'application/ejson',
          Accept: 'application/json',
        },
      },
    );
    sendEmail(email, description, fullName);
  } catch (error) {
    console.error(error);
    return {
      message: 'Opps, something went wrong. Please try again later.',
    };
  }
  redirect('contact');
}

export async function fetchProjects() {
  try {
    const res = await axios.post(
      `${baseUrl}/action/find`,
      {
        dataSource: 'Cluster0',
        database: 'portfollioDB',
        collection: 'projects',
      },
      {
        headers: {
          apiKey: apiKey,
          'Content-Type': 'application/ejson',
          Accept: 'application/json',
        },
      },
    );
    return res.data.documents;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function fetchStack() {
  try {
    const res = await axios.post(
      `${baseUrl}/action/find`,
      {
        dataSource: 'Cluster0',
        database: 'portfollioDB',
        collection: 'stacks',
      },
      {
        headers: {
          apiKey: apiKey,
          'Content-Type': 'application/ejson',
          Accept: 'application/json',
        },
      },
    );
    return res.data.documents[0];
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
