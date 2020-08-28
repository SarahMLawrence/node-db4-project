exports.up = async function (knex) {

  // create table recipes
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id"); // ID
    table.text("recipe_name", ).notNull().unique();
  });

  //create table ingredients
  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id"); // ID
    table.text("ingredient_name", 128).unique().notNull();
  });

  await knex.schema.createTable("instructions", (table) => {
    table.increments("id"); // ID
    table
    .integer("recipe_id")
    .unsigned()
    .notNull()
    .references("recipes.id")
    // .inTable("ingredients")
    .onDelete("SET NULL");
    table.integer("step_number").notNull().unsigned();
    table.text("steps", 250).notNull();
    table.integer("minutes", 128).notNull();

  });


  await knex.schema.createTable("recipe_instructions", (table) => {
    table.float("measurement", 128).notNull().unsigned()
    table.integer("ingredients_id").notNull().references('ingredients.id').onDelete("CASCADE");
    table
      .integer("recipe_id")
      .notNull()
      .references("recipes.id")
      .onDelete("CASCADE");

    table.primary(["ingredients_id", "recipe_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipe_instructions");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
