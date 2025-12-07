import { NextRequest, NextResponse } from "next/server";

// TODO: Backend API'ye bağlanacak
// Şimdilik basit bir validation yapıyoruz
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // TODO: Backend API'ye POST request at
    // const response = await fetch(`${process.env.API_URL}/api/v1/waitlist`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email }),
    // });

    // Şimdilik başarılı dönüyoruz
    return NextResponse.json(
      { message: "Successfully joined waitlist", email },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}

