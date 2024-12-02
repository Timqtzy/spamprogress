const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:5173", // Your front-end URL
  methods: "GET, POST",
};

app.use(cors(corsOptions)); // Use this instead of app.use(cors());
app.use(express.json());
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const dataSchema = new mongoose.Schema(
  {
    email: String,
    subscribe: Boolean,
  },
  { collection: "User" }
);

const Data = mongoose.model("Data", dataSchema);

// Get all data
app.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add new data (if needed)
app.post("/data", async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(400).json({ error: "Bad request" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
