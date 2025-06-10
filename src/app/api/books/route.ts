import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.ADMIN_BACKEND_URL}/api/v1/books/get-all`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
      console.error("Error while calling api", error);
    return NextResponse.json({ success: false, message: "Proxy failed" }, { status: 500 });
  }
}
