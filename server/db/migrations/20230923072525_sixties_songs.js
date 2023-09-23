/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('sixties_songs', (table) => {
    table.increments('id').primary()
    table.string('song_name').notNullable()
    table.string('artist').notNullable()
    table.integer('year_released').notNullable()
    table.string('album_name').notNullable()
    table.string('youtube_url').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('sixties_songs')
}
