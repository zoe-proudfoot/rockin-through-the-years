/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('sixties_bands').insert([
    {
      id: 1,
      band_name: 'The Beatles',
      genre: 'Rock/Pop',
      band_members: 'John Lennon, Paul McCartney, George Harrison, Ringo Starr',
      best_song: 'Hey Jude',
      bio: 'Formed in Liverpool, they became widely regarded as the greatest and most influential band in the history of popular music.',
      year_formed: '1960',
      city_of_origin: 'Liverpool',
      country_of_origin: 'England',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 2,
      band_name: 'The Rolling Stones',
      genre: 'Rock/Pop',
      band_members: 'Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood',
      best_song: 'Gimme Shelter',
      bio: 'Known for their energetic performances and longevity, they are one of the most popular and enduring bands of the rock era.',
      year_formed: '1962',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 3,
      band_name: 'The Who',
      genre: 'Rock',
      band_members: 'Roger Daltrey, Pete Townshend, John Entwistle, Keith Moon',
      best_song: "Baba O'Riley",
      bio: "Emerging in the mid-1960s as a part of the British Invasion, The Who were known for their energetic performances and pioneering rock operas like 'Tommy' and 'Quadrophenia'.",
      year_formed: '1964',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 4,
      band_name: 'The Doors',
      genre: 'Psychedelic Rock',
      band_members: 'Jim Morrison, Ray Manzarek, Robby Krieger, John Densmore',
      best_song: 'Light My Fire',
      bio: 'Known for their poetic lyrics and unique sound, The Doors became one of the most influential and controversial rock acts of the 1960s. Their lead singer, Jim Morrison, became an iconic frontman in rock history.',
      year_formed: '1965',
      city_of_origin: 'Los Angeles',
      country_of_origin: 'United States',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 5,
      band_name: 'Jimi Hendrix Experience',
      genre: 'Psychedelic Rock, Blues',
      band_members: 'Jimi Hendrix, Noel Redding, Mitch Mitchell',
      best_song: 'Purple Haze',
      bio: "Fronted by legendary guitarist Jimi Hendrix, the band was known for its fusion of rock and blues, and Hendrix's innovative guitar work. Their performances at events like Woodstock are iconic.",
      year_formed: '1966',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 6,
      band_name: 'Led Zeppelin',
      genre: 'Hard Rock, Blues Rock',
      band_members: 'Jimmy Page, Robert Plant, John Paul Jones, John Bonham',
      best_song: 'Stairway to Heaven',
      bio: 'Forming in the late 60s, Led Zeppelin became one of the most iconic, influential, and best-selling music artists in the history of audio recording. Known for their heavy sound and mystical themes.',
      year_formed: '1968',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 7,
      band_name: 'Cream',
      genre: 'Blues Rock, Psychedelic Rock',
      band_members: 'Eric Clapton, Jack Bruce, Ginger Baker',
      best_song: 'Sunshine of Your Love',
      bio: 'Considered the first supergroup, Cream combined blues and rock in innovative ways and were known for their live improvisations. They had a major influence on the genre of hard rock that emerged in the 1970s.',
      year_formed: '1966',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 8,
      band_name: 'The Kinks',
      genre: 'Rock',
      band_members: 'Ray Davies, Dave Davies, Pete Quaife, Mick Avory',
      best_song: 'You Really Got Me',
      bio: 'The Kinks, part of the British Invasion, were known for their innovative songwriting by Ray Davies. Their sound evolved from hard-driving rock tunes to more melodic and introspective songs, influencing a range of genres from garage rock to punk.',
      year_formed: '1964',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 9,
      band_name: 'Jefferon Airplane',
      genre: 'Psychedelic Rock, Folk Rock',
      band_members:
        'Grace Slick, Marty Balin, Paul Kantner, Jorma Kaukonen, Jack Casady, Spencer Dryden',
      best_song: 'White Rabbit',
      bio: 'Evolving from a folk rock group to psychedelic pioneers, Jefferson Airplane became icons of the San Francisco Sound. Known for their social and political commentary, they were central figures in the 1967 Summer of Love.',
      year_formed: '1965',
      city_of_origin: 'San Francisco',
      country_of_origin: 'United States',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
    {
      id: 10,
      band_name: 'The Yardbirds',
      genre: 'Blues Rock, Psychedelic Rock',
      band_members:
        'Keith Relf, Jim McCarty, Chris Dreja, Paul Samwell-Smith, Eric Clapton, Jeff Beck, Jimmy Page',
      best_song: 'For Your Love',
      bio: 'The Yardbirds are often cited for their role in pioneering three major guitar innovations: fuzz tone, feedback, and distortion. Having three of the greatest guitarists in rock history (Clapton, Beck, and Page), they significantly influenced later rock acts.',
      year_formed: '1963',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url: 'PLACEHOLDER_URL',
      youtube_url: 'PLACEHOLDER_URL',
    },
  ])
}
