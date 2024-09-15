// File: pages/api/support.js

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    // Log the received message
    console.log("Received support message:", message);

    // Here you can add your logic to process the message
    // For example, you might want to:
    // - Save it to a database
    // - Send it to a third-party customer support system
    // - Trigger an email notification

    // For now, we'll just send a success response
    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing support message:", error);
    return NextResponse.json(
      { success: false, message: "Error processing message" },
      { status: 500 }
    );
  }
}
