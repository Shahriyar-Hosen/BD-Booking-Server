const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// ---------------------------

// const uri =
//   `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.efjve.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

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

// async function run() {
//   // try catch finally
//   try {
//     await client.connect();
//         console.log("MongoDB To Connected.");
//     // const userCollection = client.db("foodExpress").collection("user");
//   }  catch (error) {
//         console.log("MongoDB To disconnected.");
//         throw error;
//       }
//     finally {
//   }
// }
// // call function catch (console dir)
// run().catch(console.dir);
// --------------------------------------------

// http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connect();
  console.log(`Connected To backend. Port: ${port}`);
});
