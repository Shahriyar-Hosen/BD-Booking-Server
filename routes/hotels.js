import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/Error.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).send(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ================================

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send(updateHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ================================

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).send("Hotel has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
// ================================

// GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).send(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ================================

// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).send(hotels);
  } catch (err) {
    next(err);
  }
});
// ================================

// router.get("/", (req, res) => {
//   res.send("Hello, this is hotels endpoint");
// });

export default router;
