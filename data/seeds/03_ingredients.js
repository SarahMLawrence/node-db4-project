exports.seed = async function (knex) {
  await knex("ingredients").insert([
    {ingredient_name: "Tomato Sauce"},
    {ingredient_name: "Noodles"},
    {ingredient_name: "Beans"},
{ingredient_name: "Rice"},
    {ingredient_name: "Chicken"},


  ]);
};

