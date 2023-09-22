/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('sixties_bands', (table) => {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.string('genre').notNullable()
    table.string('decade').notNullable()
    table.integer('year_formed').notNullable()
    table.string('country_of_origin')
    table.string('city_of_origin')
    table.text('bio')
    table.string('image_url')
    table.string('youtube_url')
    table.string('spotify_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('sixties_bands')
}
