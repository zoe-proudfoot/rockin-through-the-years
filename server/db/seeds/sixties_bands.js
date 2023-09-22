/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('sixties_bands').insert([
    {
      id: 1,
      name: 'The Beatles',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1960,
      country_of_origin: 'United Kingdom',
      city_of_origin: 'London',
      bio: 'Legendary British rock band formed in Liverpool in 1960. They became widely regarded as the foremost and most influential music band in history.',
      image_url:
        'https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg',
      youtube_url: 'https://www.youtube.com/@TheBeatles',
      spotify_url:
        'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2?si=a809f8a09bc949d2',
    },
    {
      id: 2,
      name: 'The Rolling Stones',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1962,
      country_of_origin: 'United Kingdom',
      city_of_origin: 'London',
      bio: 'Iconic English rock band in London in 1962. Known for hits like "Angie", "Paint It Black", and "Start Me Up".',
      image_url:
        'https://cdn.britannica.com/41/197341-050-4859B808/The-Rolling-Stones-Bill-Wyman-Keith-Richards-1964.',
      youtube_url: 'https://www.youtube.com/channel/UCB_Z6rBg3WW3NL4-QimhC2A',
      spotify_url:
        'https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe?si=78db16a726a24384',
    },
    {
      id: 3,
      name: 'The Who',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1964,
      country_of_origin: 'United Kingdom',
      city_of_origin: 'London',
      bio: 'British rock band formed in London in 1964. Renowned for pioneering rock operas like "Tommy", and anthems like "Babba O/Riley".',
      image_url:
        'https://variety.com/wp-content/uploads/2022/01/The-Who.jpg?w=1000',
      youtube_url: 'https://www.youtube.com/channel/UCUtwj-3S97bj3lYDVxDKtlQ',
      spotify_url:
        'https://open.spotify.com/artist/67ea9eGLXYMsO2eYQRui3w?si=ee3ed3216cf845e6',
    },
    {
      id: 4,
      name: 'The Doors',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1965,
      country_of_origin: 'United States',
      city_of_origin: 'Los Angeles',
      bio: 'American rock band formed in Los Angeles in 1965. Known for hits like "Light My Fire", "Riders on the Storm", and "Break on Through".',
      image_url:
        'https://thedoors.com/wp-content/uploads/2020/03/bio-full-band4.png',
      youtube_url: 'https://www.youtube.com/channel/UCYgJ2M1mq8Ae0QOm_VQU4VQ',
      spotify_url:
        'https://open.spotify.com/artist/22WZ7M8sxp5THdruNY3gXt?si=3958a612cacf4c23',
    },
    {
      id: 5,
      name: 'The Jimi Hendrix Experience',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1966,
      country_of_origin: 'United States',
      city_of_origin: 'Seattle',
      bio: 'Formed in 1966, this trio led by Jimi Hendrix became iconic for their revolutionary guitar sounds and psychedelic music.',
      image_url:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.discogs.com%2Fartist%2F255672-The-Jimi-Hendrix-Experience&psig=AOvVaw1Lsx9tDlw9jNBH9IkjOVHm&ust=1695441881950000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJiZk6qrvYEDFQAAAAAdAAAAABAE',
      youtube_url: 'https://www.youtube.com/channel/UCEqrtYLjy1o4hvaUI0J530w',
      spotify_url:
        'https://open.spotify.com/artist/776Uo845nYHJpNaStv1Ds4?si=94e75394c88a4b0b',
    },
    {
      id: 6,
      name: 'Led Zeppelin',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1968,
      country_of_origin: 'United Kingdom',
      city_of_origin: 'London',
      bio: 'Formed in 1968, Led Zeppelin is frequently cited as one of the greatest rock bands in history. Known for hits like "Stairway to Heaven" and "Whole Lotta Love".',
      image_url:
        'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-05/led_zeppelin.png',
      youtube_url: 'https://www.youtube.com/channel/UCaKZA66vM_TUpetUNohmR0A',
      spotify_url:
        'https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp?si=fc01cff1ae4a4868',
    },
    {
      id: 7,
      name: 'Cream',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1966,
      country_of_origin: 'United Kingdom',
      city_of_origin: 'London',
      bio: 'British rock power trio formed in London in 1966. Consisted oh bassist/singer Jack Bruce, drummer Ginger Baker, and guitarist/singer Eric Clapton.',
      image_url:
        'https://cdn.britannica.com/30/137030-050-67FFCF4E/Cream-Jack-Bruce-Ginger-Baker-Eric-Clapton-1967.jpg',
      youtube_url: 'https://www.youtube.com/channel/UC_oKib7DXJ7JE5erWrFUbEQ',
      spotify_url:
        'https://open.spotify.com/artist/74oJ4qxwOZvX6oSsu1DGnw?si=f6424b5221104df8',
    },
    {
      id: 8,
      name: 'The Kinks',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1964,
      country_of_origin: 'United Kingdom',
      city_of_origin: 'London',
      bio: 'English rock band formed in London in 1964. Known for hits like "You Really Got Me", and "Lola".',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Helmfrid-sofa4_Touched.JPG',
      youtube_url: 'https://www.youtube.com/channel/UC_NS3vx8ZLC6MPJJkBV1x9A',
      spotify_url:
        'https://open.spotify.com/artist/1SQRv42e4PjEYfPhS0Tk9E?si=0fbe18e21e9641aa',
    },
    {
      id: 9,
      name: 'Jefferson Airplane',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1965,
      country_of_origin: 'United States',
      city_of_origin: 'San Francisco',
      bio: 'Formed in 1965, they became a defining band in the counterculture era with hits like "White Rabbit" and "Somebody to Love".',
      image_url:
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jefferson_Airplane.jpg/640px-Jefferson_Airplane.jpg',
      youtube_url: 'https://www.youtube.com/channel/UCebgb37-z3_i6Xk_h4ch9YQ',
      spotify_url:
        'https://open.spotify.com/artist/2qFr8w5sWUITRlzZ9kZotF?si=92b050724c6241d8',
    },
    {
      id: 10,
      name: 'The Yardbirds',
      genre: 'Rock',
      decade: '1960s',
      year_formed: 1963,
      country_of_origin: 'United Kingdom',
      city_of_origin: 'London',
      bio: 'English rock band that had a string of hits in the mid-1960s. Known for launching the careers of Eric Clapton, Jimmy Page, and Jeff Beck.',
      image_url:
        'https://upload.wikimedia.org/wikipedia/en/0/0e/Yardbirds_including_Page.JPG',
      youtube_url: 'https://www.youtube.com/channel/UC--CUY9RbIaFjKM3wZkIEOA',
      spotify_url:
        'https://open.spotify.com/artist/2lxX1ivRYp26soIavdG9bX?si=3ff985c7333c486c',
    },
  ])
}
