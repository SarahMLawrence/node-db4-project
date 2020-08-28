exports.seed = async function (knex) {
  await knex("instructions").insert([
    { recipe_id: 1, step_number: 1, steps: "Boil the noodles", minutes: 10},
    { recipe_id: 1, step_number: 2, steps: "Brown the meat", minutes: 15 },
    { recipe_id: 1, step_number: 3, steps: "Boil Rice", minutes: 10 },
    { recipe_id: 2, step_number: 1, steps: "Open can of beans and place in microwave", minutes: 8 },
    { recipe_id: 2, step_number: 2, steps: "Mix Rice and beans", minutes: 1 },
    { recipe_id: 3, step_number: 1, steps: "Cook Chicken", minutes: 45  },
    { recipe_id: 3, step_number: 2, steps: "Open can of Cream of Chicken", minutes: 0 },
  ]);
};
