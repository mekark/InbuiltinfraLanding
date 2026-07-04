import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');

    // Prefer client-provided source; fall back to request headers
    const payload = {
      ...body,
      sourceDomain:
        body.sourceDomain ||
        (origin ? new URL(origin).hostname : undefined) ||
        (referer ? new URL(referer).hostname : undefined),
      sourceUrl: body.sourceUrl || referer || origin || undefined,
    };

    // Forward the request to your backend server
    const response = await fetch('https://inbuilt-backend-mail.onrender.com/api/enquiry-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(origin ? { Origin: origin } : {}),
        ...(referer ? { Referer: referer } : {}),
      },
      body: JSON.stringify(payload)
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
