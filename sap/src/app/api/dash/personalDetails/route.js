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
    console.log("Starting GET request for Individual Person Details");
    await connectDB();
    console.log("Connected to database");

    // Use the "Individual Person Details" collection
    const collection = mongoose.connection.db.collection(
      "Indivial Person Details"
    );
    console.log("Collection name:", collection.collectionName);

    const persons = await collection.find({}).toArray();
    console.log("Query executed");
    console.log("Number of person details found:", persons.length);

    if (persons.length > 0) {
      console.log("Sample document:", JSON.stringify(persons[0], null, 2));
    } else {
      console.log(
        "No documents found in the Individual Person Details collection"
      );
    }

    const mappedPersons = persons.map((person) => {
      const mapped = {
        _id: person._id,
        Unnamed: person.Unnamed !== undefined ? person.Unnamed : 0,
        ID: person.ID !== undefined ? person.ID : "Not Available",
        names: person.names || "Not Available",
        apartment:
          person.apartment !== undefined ? person.apartment : "Not Available",
        parking_pass:
          person.parking_pass !== undefined ? person.parking_pass : false,
        email: person.email || "Not Available",
        phone: person.phone || "Not Available",
      };

      // Log any missing fields
      Object.keys(mapped).forEach((key) => {
        if (mapped[key] === undefined) {
          console.log(`Missing field in document ${person._id}: ${key}`);
        }
      });

      return mapped;
    });

    return NextResponse.json({ data: mappedPersons });
  } catch (error) {
    console.error("Error fetching individual person details:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch individual person details" },
      { status: 500 }
    );
  }
}
