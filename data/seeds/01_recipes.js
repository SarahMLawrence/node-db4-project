exports.seed = async function (knex) {
  await knex("recipes").insert([
    { recipe_name: "Spaghetti" },
    { recipe_name: "Rice and Beans" },
    { recipe_name: "Chicken and Dumplings" },
  ]);
};
