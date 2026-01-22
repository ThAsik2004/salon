import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Service.find());
});

router.post("/seed", async (req, res) => {
  await Service.insertMany([
    { name: "Hair Cut", price: 200 },
    { name: "Facial", price: 800 },
    { name: "Pedicure", price: 600 },
    { name: "Spa", price: 1200 }
  ]);
  res.json({ message: "Services added" });
});

export default router;
