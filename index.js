import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'

const app = express();
dotenv.config()
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/auth", authRoute)
// ---------------------------

// async await function
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
  } catch (error) {
    // console.log("MongoDB To disconnected!");
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("mongoDB Connected!");
});

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
