const db = require("../data/config");

function find() {
  return db("recipes");
}

function getRecipeList(id) {
  return db("recipe_instructions as ri").where("id", id)
  .join("ingredients as i", "i.id", "=", "ri.ingredients_id")
.select("i.ingredient_name", "ri.measurement");
}

function findInstructions(id){
  return db("instructions as i")
  .where("i.recipe_id", id)
  .select("i.step_number", "i.steps");
}

module.exports = {
  find,
  getRecipeList,
  findInstructions,
};
