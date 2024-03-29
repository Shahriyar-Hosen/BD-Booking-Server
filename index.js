import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const port = process.env.PORT || 8800;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

// Error Message
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
// ================================

// ---------------------------

// async await function
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected To MongoDB!");
  } catch (error) {
    // console.log("MongoDB To disconnected!");
    throw error;
  }
};

// mongoose.connection.on("connected", () => {
//   console.log("mongoDB Connected!");
// });

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB Disconnected!");
});

// http://localhost:5000/
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  connect();
  console.log(`Connected To backend. Port: ${port}`);
});
