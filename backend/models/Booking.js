import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    serviceName: String,
    price: Number,
    status: {
      type: String,
      default: "Booked"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
