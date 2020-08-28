exports.seed = async function (knex) {
  await knex("ingredients").insert([
    {ingredient_name: "Tomato Sauce"},
    {ingredient_name: "Chicken"},


  ]);
};