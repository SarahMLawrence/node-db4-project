const db = require("../data/config");

function find() {
  return db("instructions as s")
    .leftJoin("ingredients as i", "i.id", "s.ingredients_id")
    .select("s.id", "s.steps", "i.ingredient_name");
}

function findById(id) {
  return db("instructions as s")
    .leftJoin("ingredients as i", "i.id", "s.ingredients_id")
    .select("s.id", "s.steps", "i.ingredient_name");
}

module.exports = {
  find,
  findById,
};
