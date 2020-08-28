const db = require("../data/config");

function find(recipe_id) {
  return db("instructions as i")
  .select("i.*", "recipes.recipe_name")
  .join("recipes ", "i.recipe_id", "recipes.id")
  .where("recipe_id", "=", "recipe_id")
    // .leftJoin("ingredients as i", "i.id", "s.ingredients_id")
    // .select("s.id", "s.steps", "i.ingredient_name");
}

function findById(id) {
  return db("instructions as i")
    // .leftJoin("ingredients as i", "i.id", "s.ingredients_id")
    // .select("s.id", "s.steps", "i.ingredient_name");
    .join('recipe_instructions as ri', 'ri.ingredients_id', 'i.id')
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .select('r.*', 'i.step_number', 'i.steps', 'i.id as recipe_id' )
    .where('i.id', '=', id)
}

module.exports = {
  find,
  findById,
};
