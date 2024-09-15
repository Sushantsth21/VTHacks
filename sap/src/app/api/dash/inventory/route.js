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
    console.log("Starting GET request for Inv Count Details");
    await connectDB();
    console.log("Connected to database");

    // Use the "Inv Count Details" collection
    const collection = mongoose.connection.db.collection("Inv Count Details");
    console.log("Collection name:", collection.collectionName);

    const items = await collection.find({}).toArray();
    console.log("Query executed");
    console.log("Number of inventory count details found:", items.length);

    if (items.length > 0) {
      console.log("Sample document:", JSON.stringify(items[0], null, 2));
    } else {
      console.log("No documents found in the Inv Count Details collection");
    }

    const mappedItems = items.map((item) => {
      const mapped = {
        _id: item._id,
        code: item.code || "Not Available",
        item: item.item || "Not Available",
        location: item.location || "Not Available",
        count: item.count !== undefined ? item.count : 0,
      };

      // Log any missing fields
      Object.keys(mapped).forEach((key) => {
        if (mapped[key] === undefined) {
          console.log(`Missing field in document ${item._id}: ${key}`);
        }
      });

      return mapped;
    });

    return NextResponse.json({ data: mappedItems });
  } catch (error) {
    console.error("Error fetching inventory count details:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch inventory count details" },
      { status: 500 }
    );
  }
}
