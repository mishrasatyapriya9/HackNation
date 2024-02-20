import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "booked"],
    required: true,
  },
});

const photographerSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    // },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    experienceYears: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pricePerEvent: {
      type: Number,
      required: true,
    },
    availability: {
      type: [availabilitySchema],
      default: [],
    },
    photos: {
      type: [String],
      default: [],
    },
    servicesOffered: {
      type: [String],
      default: [],
    },
    chatHistory: {
      type: [String],
      default: [],
    },
    role: {
      type: Number,
      default: 3,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Photographer", photographerSchema);
