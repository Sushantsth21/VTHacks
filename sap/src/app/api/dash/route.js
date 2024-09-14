import mongoose from "mongoose";
import { NextResponse } from "next/server"; // Keep this if you're using App Router

// Create a connection function
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return; // If already connected, use current connection
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export async function GET(request) {
  try {
    await connectDB();

    // Check if model exists before declaring it
    const ApartmentDetails =
      mongoose.models.ApartmentDetails ||
      mongoose.model(
        "ApartmentDetails",
        new mongoose.Schema({}, { strict: false }),
        "Apartment Details" // Specify the correct collection name here
      );

    const apartments = await ApartmentDetails.find({}).lean();
    console.log(apartments);

    return NextResponse.json({ success: true, data: apartments }); // For App Router
  } catch (error) {
    console.error("Error fetching apartment details:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch apartment details" },
      { status: 500 }
    );
  }
}
