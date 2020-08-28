
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {ingredients_id: 1, recipe_id: 2, Measurement: 20},
        {ingredients_id: 2, recipe_id: 1, Measurement: 5},
        {ingredients_id: 3, recipe_id: 3, Measurement: 15},
      ]);
    });
};
