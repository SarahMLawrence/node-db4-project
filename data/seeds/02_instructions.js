exports.seed = async function (knex) {
  await knex("instructions").insert([
    { step_number: 1, steps: "Boil the noodles", minutes: "10", ingredients_id: 1 },
    { step_number: 2, steps: "Brown the meat", minutes: "15", ingredients_id: 1 },
  ]);
};
