import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../Controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/VerifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});


//UPDATE
router.put("/:id", updateUser);
// =====================================

//DELETE
router.delete("/:id", deleteUser);
// =====================================

//GET
router.get("/:id", getUser);
// =====================================

//GET ALL
router.get("/", getUsers);
// =====================================

export default router;
