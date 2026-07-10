const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const projectRoutes = require("./routes/projectRoutes");
console.log(projectRoutes);

app.use("/api", (req, res, next) => {
    console.log("API HIT:", req.method, req.url);
    next();
});

app.use("/api", projectRoutes);

// MongoDB Connection
console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("✅ MongoDB Connected");
    console.log("ReadyState:", mongoose.connection.readyState);
    console.log("Database:", mongoose.connection.name);
})
.catch((err) => {
    console.error("❌ MongoDB Error:", err);
});

// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend Running Successfully 🚀");
});

const PORT = process.env.PORT || 5000;

app.post("/test", (req, res) => {
    console.log("TEST ROUTE HIT");
    res.json({ message: "Test OK" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});