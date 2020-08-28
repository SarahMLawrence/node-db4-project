const express = require("express")
const Ingredients = require("../models/ingredients")

const router = express.Router()

router.get("/ingredients", async (req, res, next) => {
    try {
      const ingredients = await Ingredients.find();
      res.json(ingredients);
    } catch (err) {
      next(err);
    }
  });

module.exports = router