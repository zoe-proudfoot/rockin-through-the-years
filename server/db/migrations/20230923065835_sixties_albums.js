/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('sixties_albums', (table) => {
    table.increments('id').primary()
    table.string('album_name').notNullable().unique().notNullable()
    table.string('artist').notNullable()
    table.integer('year_released').notNullable()
    table.string('lead_single').notNullable()
    table.string('cover_image_url').notNullable()
    table.string('youtube_url').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('sixties_albums')
}
