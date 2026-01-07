const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const destinationRoutes = require("./routes/destination.routes");

const healthRoutes = require("./routes/health.routes");

const app = express();

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

// Root route for basic testing
app.get("/", (req, res) => {
  res.send("YatraAI Backend is running");
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", healthRoutes);
app.use("/api/destinations", destinationRoutes);



module.exports = app;
