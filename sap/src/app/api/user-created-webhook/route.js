import { NextResponse } from "next/server";
import { initAuth } from "@propelauth/node";

const auth = initAuth({
  authUrl: process.env.PROPELAUTH_AUTH_URL,
  apiKey: process.env.PROPELAUTH_API_KEY,
});

// Define the organization ID that all users will be added to
const DEFAULT_ORG_ID = process.env.DEFAULT_ORG_ID;

export async function POST(request) {
  try {
    const { user } = await request.json();

    await auth.addUserToOrg({
      userId: user.userId,
      orgId: DEFAULT_ORG_ID,
      role: "Member", // Or whatever role you want to assign
    });

    console.log(`User ${user.userId} added to org ${DEFAULT_ORG_ID}`);

    return NextResponse.json(
      { message: "User added to organization successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error adding user to org: ${error}`);
    return NextResponse.json(
      { error: "Failed to add user to organization" },
      { status: 500 }
    );
  }
}
