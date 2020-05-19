const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const router = express.Router();

// available routes
const userRoute = require("./routes/userRoute");
const termsRoute = require("./routes/termsRoute");

const dbUrl =
  "mongodb://gordon:jsondebugger1@ds149596.mlab.com:49596/itunes-searches";


// connect to Mongo
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

let db = mongoose.connection; 

db.once("open", () => {
  console.log("Successfully connected to MongoDB");
});

db.on("error", console.error.bind(console, "Failed to connect to MongoDB"));

// for http requests
app.use("/api", router);
app.use("/api/users", userRoute);
app.use("/api/terms", termsRoute);

app.listen(3001, () => {
  console.log("Server is listening on port 3001!");
});
