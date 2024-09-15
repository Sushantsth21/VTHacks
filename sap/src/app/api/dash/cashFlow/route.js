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
    console.log("Starting GET request for Cash Flow");
    await connectDB();
    console.log("Connected to database");

    // Use the "Cash Flow" collection
    const collection = mongoose.connection.db.collection("Cash Flow");
    console.log("Collection name:", collection.collectionName);

    const cashFlows = await collection.find({}).toArray();
    console.log("Query executed");
    console.log("Number of cash flow documents found:", cashFlows.length);

    if (cashFlows.length > 0) {
      console.log("Sample document:", JSON.stringify(cashFlows[0], null, 2));
    } else {
      console.log("No documents found in the Cash Flow collection");
    }

    const mappedCashFlows = cashFlows.map((cashFlow) => {
      const mapped = {
        _id: cashFlow._id,
        Unnamed: cashFlow.Unnamed !== undefined ? cashFlow.Unnamed : 0,
        code: cashFlow.code,
        item: cashFlow.item,
        location: cashFlow.location,
        amount: cashFlow.amount !== undefined ? cashFlow.amount : 0,
        flow_type: cashFlow.flow_type,
        apartment: isNaN(cashFlow.apartment) ? "NaN" : cashFlow.apartment,
        monthly_rent: isNaN(cashFlow.monthly_rent)
          ? "NaN"
          : cashFlow.monthly_rent,
      };

      // Log any missing fields
      Object.keys(mapped).forEach((key) => {
        if (mapped[key] === undefined) {
          console.log(`Missing field in document ${cashFlow._id}: ${key}`);
        }
      });

      return mapped;
    });

    return NextResponse.json({ data: mappedCashFlows });
  } catch (error) {
    console.error("Error fetching cash flow details:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch cash flow details" },
      { status: 500 }
    );
  }
}
