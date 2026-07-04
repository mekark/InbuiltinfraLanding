import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Forward the request to your backend server
    const response = await fetch('https://inbuilt-backend-mail.onrender.com/api/enquiry-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(data, { status: response.status });
    }
  } catch (error) {
    console.error('Error forwarding request:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry' },
      { status: 500 }
    );
  }
}
