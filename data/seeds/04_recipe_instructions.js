exports.seed = async function (knex) {
  await knex("recipe_instructions").insert([
    { measurement: "2 handfuls of noodles", instructions_id: 1, recipe_id: 1 },
    { measurement: "2 cans", instructions_id: 1, recipe_id: 1 }
  ]);
};
