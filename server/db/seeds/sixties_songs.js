/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('sixties_songs').insert([
    {
      id: 1,
      song_name: 'A Day in the Life',
      artist: 'The Beatles',
      year_released: 1967,
      album_name: "Sgt. Pepper's Lonely Hearts Club Band",
      youtube_url: 'https://www.youtube.com/watch?v=usNsCeOV4GM',
    },
    {
      id: 2,
      song_name: 'Paint It Black',
      artist: 'The Rolling Stones',
      year_released: 1966,
      album_name: 'Aftermath',
      youtube_url: 'https://www.youtube.com/watch?v=O4irXQhgMqg',
    },
    {
      id: 3,
      song_name: 'My Generation',
      artist: 'The Who',
      year_released: 1965,
      album_name: 'My Generation',
      youtube_url: 'https://www.youtube.com/watch?v=594WLzzb3JI',
    },
    {
      id: 4,
      song_name: 'Light My Fire',
      artist: 'The Doors',
      year_released: 1967,
      album_name: 'The Doors',
      youtube_url: 'https://www.youtube.com/watch?v=flsBjS0p1Aw',
    },
    {
      id: 5,
      song_name: 'Purple Haze',
      artist: 'Jimi Hendrix',
      year_released: 1967,
      album_name: 'Are You Experienced',
      youtube_url: 'https://www.youtube.com/watch?v=Hd0PA7oKvlE',
    },
    {
      id: 6,
      song_name: 'Whole Lotta Love',
      artist: 'Led Zeppelin',
      year_released: 1969,
      album_name: 'Led Zeppelin II',
      youtube_url: 'https://www.youtube.com/watch?v=HQmmM_qwG4k',
    },
    {
      id: 7,
      song_name: 'Sunshine of Your Love',
      artist: 'Cream',
      year_released: 1967,
      album_name: 'Disraeli Gears',
      youtube_url: 'https://www.youtube.com/watch?v=zt51rITH3EA',
    },
    {
      id: 8,
      song_name: 'You Really Got Me',
      artist: 'The Kinks',
      year_released: 1964,
      album_name: 'The Kinks',
      youtube_url: 'https://www.youtube.com/watch?v=Uk55RsQZsMY',
    },
    {
      id: 9,
      song_name: 'Somebody to Love',
      artist: 'Jefferson Airplane',
      year_released: 1967,
      album_name: 'Surrealistic Pillow',
      youtube_url: 'https://www.youtube.com/watch?v=5Jj3wZVc7nw',
    },
    {
      id: 10,
      song_name: 'For Your Love',
      artist: 'The Yardbirds',
      year_released: 1965,
      album_name: 'For Your Love',
      youtube_url: 'https://www.youtube.com/watch?v=HnX-4AeWzTs',
    },
  ])
}
