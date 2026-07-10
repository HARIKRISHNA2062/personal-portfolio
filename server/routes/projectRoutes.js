const express = require("express");
console.log("projectRoutes loaded");
const router = express.Router();

const Project = require("../models/project");

router.post("/contact", async (req, res) => {
  console.log("Route reached");
  console.log("Request Body:", req.body);
  try {
    const project = new Project(req.body);

    console.log("Ready state:", require("mongoose").connection.readyState);
    console.log("Collection:", Project.collection.name);

    await project.save();
    console.log("Saved Successfully");

    res.status(201).json({
      message: "Data Saved Successfully"
    });
  } catch (err) {
    console.error("FULL ERROR:", err);

    res.status(500).json({
        message: err.message
    });
}
});

router.get("/messages", async (req, res) => {
  try {
    const messages = await Project.find().sort({ _id: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;