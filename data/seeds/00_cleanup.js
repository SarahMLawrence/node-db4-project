exports.seed = async function(knex) {
	await knex("recipe_instructions").truncate()
	await knex("instructions").truncate()
	await knex("ingredients").truncate()
	await knex("recipes").truncate()
}