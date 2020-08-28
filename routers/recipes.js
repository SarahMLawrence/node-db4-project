const express = require("express");
const Recipe = require("../models/recipes");

const router = express.Router();

router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:id", async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.json(recipe);
  } catch (err) {
    next(err);
  }
});
  
module.exports = router;