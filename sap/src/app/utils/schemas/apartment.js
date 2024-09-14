import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema(
  {
    Unnamed: {
      type: Number,
      default: 0,
    },
    apartment: {
      type: Number,
      required: true,
    },
    assigned: {
      type: Boolean,
      default: false,
    },
    num_people: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      required: true,
    },
    rent_amount_monthly: {
      type: Number,
      required: true,
    },
    parking_spaces: {
      type: Number,
      default: 0,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    // This will add createdAt and updatedAt fields
    timestamps: true,
  }
);

// Create the model
const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
