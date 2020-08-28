exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id"); // ID
    table.text("recipe_name").notNull().unique();
  });

  await knex.schema.createTable("instructions", (table) => {
    table.increments("id"); // ID
    table.integer("step_number").notNull().unsigned();
    table.text("steps").notNull();
    table.integer("minutes").notNull();
    table
      .integer("ingredients_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("SET NULL");
  });

  await knex.schema.createTable("ingredients", (table) => {
    table.increments(); // ID
    table.text("ingredient_name", 128).unique().notNull();
  });

  await knex.schema.createTable("recipe_instructions", (table) => {
    table.text("measurement").notNull();
    table
      .integer("instructions_id")
      .notNull()
      .references("id")
      .inTable("instructions")
      .onDelete("CASCADE");

    table
      .integer("recipe_id")
      .notNull()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE");

    table.primary(["instructions_id", "recipe_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipe_instructions");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("recipes");
};
