const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/contacts", require("./routes/contactroutes"));

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
