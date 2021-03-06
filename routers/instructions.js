const express = require("express");
const Instruction  = require("../models/instructions");

const router = express.Router();

router.get("/instructions", async (req, res, next) => {
  try {
    const instructions = await Instruction.find();
    res.json(instructions);
  } catch (err) {
    next(err);
  }
});

router.get("/instructions/:id", async (req, res, next) => {
  try {
    const instruction = await Instruction.findById(req.params.id);
    if (!instruction) {
      return res.status(404).json({
        message: "Instruction not found",
      });
    }

    res.json(recipe);
  } catch (err) {
    next(err);
  }
});
  
module.exports = router;