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
    console.log("Starting GET request for invoice analysis");
    await connectDB();
    console.log("Connected to database");

    const collection = mongoose.connection.db.collection("Transaction");
    console.log("Collection name:", collection.collectionName);

    const transactions = await collection.find({}).toArray();
    console.log("Query executed");
    console.log("Number of transactions found:", transactions.length);

    if (transactions.length > 0) {
      console.log("Sample document:", JSON.stringify(transactions[0], null, 2));
    } else {
      console.log("No documents found in the collection");
    }

    const amounts = transactions
      .map((transaction) => transaction.ocr_data.total)
      .filter((total) => typeof total === "number" && !isNaN(total))
      .sort((a, b) => a - b);

    if (amounts.length === 0) {
      console.log("No valid total amounts found in the transactions");
      return NextResponse.json(
        { error: "No valid total amounts found" },
        { status: 400 }
      );
    }

    // Calculate Q1, Q3, and IQR
    const q1Index = Math.floor(amounts.length / 4);
    const q3Index = Math.floor((3 * amounts.length) / 4);
    const q1 = amounts[q1Index];
    const q3 = amounts[q3Index];
    const iqr = q3 - q1;

    // Calculate the range
    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;

    // Identify outliers and flag for fraud
    const flaggedTransactions = transactions.filter((transaction) => {
      const amount = transaction.ocr_data.total;
      return (
        typeof amount === "number" &&
        !isNaN(amount) &&
        (amount < lowerBound || amount > upperBound)
      );
    });

    // Update flagged transactions in the database
    for (const transaction of flaggedTransactions) {
      await collection.updateOne(
        { _id: transaction._id },
        { $set: { flagged_for_fraud: true } }
      );
    }

    const analysisResult = {
      q1,
      q3,
      iqr,
      lowerBound,
      upperBound,
      flaggedTransactions: flaggedTransactions.map((transaction) => ({
        invoice_number: transaction.invoice_number,
        total: transaction.ocr_data.total,
      })),
    };

    console.log("Analysis completed:", JSON.stringify(analysisResult, null, 2));

    return NextResponse.json({ data: analysisResult });
  } catch (error) {
    console.error("Error performing transaction analysis:", error);
    return NextResponse.json(
      { success: false, error: "Failed to perform transaction analysis" },
      { status: 500 }
    );
  }
}
