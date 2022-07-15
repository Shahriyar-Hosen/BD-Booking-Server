import express from "express";
import {
  createRoom,
  deleteRoom,
  updateRoom,
  updateRoomAvailability,
} from "../Controllers/room";
import { verifyAdmin } from "../utils/VerifyToken";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
// ===============================================

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
// ----------------------------------------------------

router.put("/:id", verifyAdmin, updateRoom);
// ==========================================

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default router;
