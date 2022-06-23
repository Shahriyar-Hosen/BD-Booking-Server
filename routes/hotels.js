import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  console.log("req: ", req);
  console.log("new Hotel: ", newHotel);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).send(savedHotel);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// UPDATE
// DELETE
// GET
// GET ALL
// router.get("/", (req, res) => {
//   res.send("Hello, this is hotels endpoint");
// });

export default router;
