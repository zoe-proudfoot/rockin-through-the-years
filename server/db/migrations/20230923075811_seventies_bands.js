/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('seventies_bands', (table) => {
    table.increments('id').primary()
    table.string('band_name').notNullable().unique()
    table.string('genre').notNullable()
    table.string('band_members').notNullable()
    table.string('best_song').notNullable()
    table.text('bio').notNullable()
    table.string('year_formed').notNullable()
    table.string('city_of_origin').notNullable()
    table.string('country_of_origin').notNullable()
    table.string('image_url').notNullable()
    table.string('youtube_url').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('seventies_bands')
}
