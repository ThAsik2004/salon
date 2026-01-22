import express from "express";
import Booking from "../models/Booking.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/* CREATE BOOKING */
router.post("/", auth, async (req, res) => {

  const { serviceName, price } = req.body;

  const booking = await Booking.create({
    user: req.userId,
    serviceName,
    price
  });

  res.status(201).json(booking);
});

/* GET MY BOOKINGS */
router.get("/my", auth, async (req, res) => {

  const bookings = await Booking.find({ user: req.userId });

  res.json(bookings);
});

export default router;
