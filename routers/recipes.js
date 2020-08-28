const express = require("express");
const schemes = require("../models/recipes");

const router = express.Router();

//------------------//
//  GET all recipes //
//------------------//
router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await schemes.find();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

//-------------------------//
//  GET a recipeList by id //
//-------------------------//
router.get("/recipeList", async (req, res, next) => {
  try {
    const recipe = await schemes.getRecipeList(req.params.id).then((list) => {
      res.json(list);
    });
  } catch (err) {
    next(err);
  }
});

//----------------------------------------------------------------//
//  GET a list of instructions for each recipe by recipe id       //
//----------------------------------------------------------------//
router.get("/recipes/:id/instructions", async (req, res, next) => {
  try {
    const instructions = await schemes
      .findInstructions(req.params.id)
      .then((instructions) => {
        res.json(instructions);
      });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
