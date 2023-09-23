/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex('sixties_albums').insert([
    {
      id: 1,
      album_name: "Sgt. Pepper's Lonely Hearts Club Band",
      artist: 'The Beatles',
      year_released: 1967,
      lead_single: 'With a Little Help from My Friends',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 2,
      album_name: 'Are You Experienced',
      artist: 'The Jimi Hendrix Experience',
      year_released: 1967,
      lead_single: 'Purple Haze',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 3,
      album_name: 'The Doors',
      artist: 'The Doors',
      year_released: 1967,
      lead_single: 'Light My Fire',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 4,
      album_name: 'Let It Bleed',
      artist: 'The Rolling Stones',
      year_released: 1969,
      lead_single: 'You Can’t Always Get What You Want',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 5,
      album_name: 'Tommy',
      artist: 'The Who',
      year_released: 1969,
      lead_single: 'Pinball Wizard',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 6,
      album_name: 'II',
      artist: 'Led Zeppelin',
      year_released: 1969,
      lead_single: 'Whole Lotta Love',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 7,
      album_name: 'Disraeli Gears',
      artist: 'Cream',
      year_released: 1967,
      lead_single: 'Sunshine of Your Love',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 8,
      album_name: 'The Kinks Are the Village Green Preservation Society',
      artist: 'The Kinks',
      year_released: 1968,
      lead_single: 'Picture Book',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 9,
      album_name: 'Surrealistic Pillow',
      artist: 'Jefferson Airplane',
      year_released: 1967,
      lead_single: 'Somebody to Love',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 10,
      album_name: 'Roger the Engineer',
      artist: 'The Yardbirds',
      year_released: 1966,
      lead_single: 'Over Under Sideways Down',
      cover_image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
  ])
}
