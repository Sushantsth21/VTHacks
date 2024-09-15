import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB");
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }

  try {
    await mongoose.connect(uri, { dbName: "Inv" });
    console.log("Connected to MongoDB database: Inv");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export async function GET(request) {
  try {
    console.log("Starting GET request");
    await connectDB();
    console.log("Connected to database");

    const collection = mongoose.connection.db.collection("Apartment Details");
    console.log("Collection name:", collection.collectionName);

    const apartments = await collection.find({}).toArray();
    console.log("Query executed");
    console.log("Number of apartments found:", apartments.length);

    if (apartments.length > 0) {
      console.log("Sample document:", JSON.stringify(apartments[0], null, 2));
    } else {
      console.log("No documents found in the collection");
    }

    const mappedApartments = apartments.map((apt) => {
      const mapped = {
        _id: apt._id,
        Unnamed: apt.Unnamed !== undefined ? apt.Unnamed : 0,
        apartment: apt.apartment,
        assigned: apt.assigned,
        num_people: apt.num_people !== undefined ? apt.num_people : 0,
        type: apt.type,
        rent_amount_monthly:
          apt["rent_amount/monthly"] !== undefined
            ? apt["rent_amount/monthly"]
            : 0,

        parking_spaces:
          apt.parking_spaces !== undefined ? apt.parking_spaces : 0,
        year: apt.year,
      };

      // Log any missing fields
      Object.keys(mapped).forEach((key) => {
        if (mapped[key] === undefined) {
          console.log(`Missing field in document ${apt._id}: ${key}`);
        }
      });

      return mapped;
    });

    return NextResponse.json({ data: mappedApartments });
  } catch (error) {
    console.error("Error fetching apartment details:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch apartment details" },
      { status: 500 }
    );
  }
}
