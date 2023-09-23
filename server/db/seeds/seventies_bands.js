/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex('seventies_bands').insert([
    {
      id: 1,
      band_name: 'Led Zeppelin',
      genre: 'hard Rock, Blues Rock',
      band_members: 'Jimmy Page, Robert Plant, John Paul Jones, John Bonham',
      best_song: 'Stairway to Heaven',
      bio: "Formed in 1968, Led Zeppelin are often regarded as one of the pioneers of hard rock and heavy metal. With a mix of blues, rock, and folk, they became one of the world's best-selling music artists.",
      year_formed: '1968',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Led_Zeppelin_1977.jpg/440px-Led_Zeppelin_1977.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=9Q7Vr3yQYWQ',
    },
    {
      id: 2,
      band_name: 'Pink Floyd',
      genre: 'Progressive Rock, Psychedelic Rock',
      band_members:
        'Syd Barrett, David Gilmour, Nick Mason, Roger Waters, Richard Wright',
      best_song: 'Comfortably Numb',
      bio: "Founded in 1965, Pink Floyd is celebrated for their elaborate live shows and lengthy compositions. Their concept albums, particularly 'The Dark Side of the Moon' and 'The Wall', are landmarks in the rock genre.",
      year_formed: '1965',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Pink_Floyd%2C_1971.jpg/440px-Pink_Floyd%2C_1971.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=_FrOQC-zEog',
    },
    {
      id: 3,
      band_name: 'Queen',
      genre: 'Rock, Pop Rock',
      band_members: 'Freddie Mercury, Brian May, Roger Taylor, John Deacon',
      best_song: 'Bohemian Rhapsody',
      bio: "Queen formed in London in 1970 and quickly became one of the most iconic rock bands in history. Known for their theatrical live performances and genre-defying tracks, they achieved international acclaim with hits like 'Bohemian Rhapsody' and 'We Will Rock You'.",
      year_formed: '1970',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Queen_%28band%29_1975.jpg/440px-Queen_%28band%29_1975.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    },
    {
      id: 4,
      band_name: 'Aerosmith',
      genre: 'Hard Rock, Blues Rock',
      band_members:
        'Steven Tyler, Joe Perry, Tom Hamilton, Joey Kramer, Brad Whitford',
      best_song: 'Dream On',
      bio: "Originating from Boston in 1970, Aerosmith, often referred to as 'America's Greatest Rock and Roll Band', became known for hits like 'Dream On' and 'Walk This Way'. Their fusion of rock and blues has influenced numerous artists.",
      year_formed: '1970',
      city_of_origin: 'Boston',
      country_of_origin: 'United States',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Aerosmith_2019_by_Glenn_Francis.jpg/440px-Aerosmith_2019_by_Glenn_Francis.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=sZfZ8uWaOFI',
    },
    {
      id: 5,
      band_name: 'AC/DC',
      genre: 'Hard Rock, Blues Rock',
      band_members:
        'Angus Young, Brian Johnson, Malcolm Young, Phil Rudd, Cliff Williams',
      best_song: 'Highway to Hell',
      bio: "Formed in Sydney in 1973, AC/DC became one of the pioneering acts of hard rock. Known for their raw energy and powerful performances, they're one of the best-selling bands in history with hits like 'High Voltage' and 'Back in Black'.",
      year_formed: '1973',
      city_of_origin: 'Sydney',
      country_of_origin: 'Australia',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/ACDC_in_Tacoma_2009.jpg/440px-ACDC_in_Tacoma_2009.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=l482T0yNkeo',
    },
    {
      id: 6,
      band_name: 'Black Sabbath',
      genre: 'Heavy Metal, Hard Rock',
      band_members: 'Ozzy Osbourne, Tony Iommi, Geezer Butler, Bill Ward',
      best_song: 'Paranoid',
      bio: "Originating from Birmingham in 1968, Black Sabbath is often cited as pioneers of heavy metal music. With groundbreaking albums like 'Paranoid' and 'Master of Reality', they set the blueprint for the genre.",
      year_formed: '1968',
      city_of_origin: 'Birmingham',
      country_of_origin: 'England',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Black_Sabbath_1970.jpg/440px-Black_Sabbath_1970.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=NxYx6B5vrm0',
    },
    {
      id: 7,
      band_name: 'Fleetwood Mac',
      genre: 'Rock, Pop Rock',
      band_members:
        'Stevie Nicks, Christine McVie, Mick Fleetwood, John McVie, Lindsey Buckingham',
      best_song: 'Dreams',
      bio: "Formed in London in 1967 as a British blues band, Fleetwood Mac underwent various lineup changes before achieving global fame in the 1970s. Their album 'Rumours' is one of the best-selling albums of all time.",
      year_formed: '1967',
      city_of_origin: 'London',
      country_of_origin: 'England',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fleetwood_Mac_1977.jpg/440px-Fleetwood_Mac_1977.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=mrZRURcb1cM',
    },
    {
      id: 8,
      band_name: 'Ramones',
      genre: 'Punk Rock',
      band_members:
        'Joey Ramone, Johnny Ramone, Dee Dee Ramone, Tommy Ramone, Marky Ramone',
      best_song: 'I Wanna Be Sedated',
      bio: 'Hailing from Queens, New York, the Ramones formed in 1974 and are often cited as the first true punk rock group. With rapid-fire songs and a no-frills approach, they left a massive imprint on the music scene.',
      year_formed: '1974',
      city_of_origin: 'Queens',
      country_of_origin: 'United States',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ramones_%287%29.jpg/440px-Ramones_%287%29.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=K56fzTl9tEU',
    },
    {
      id: 9,
      band_name: 'Deep Purple',
      genre: 'Hard Rock, Heavy Metal',
      band_members:
        'Ian Gillan, Roger Glover, Ian Paice, Steve Morse, Don Airey',
      best_song: 'Smoke on the Water',
      bio: "Formed in Hertford in 1968, Deep Purple are among the pioneers of heavy metal and modern hard rock. Their distinct sound, marked by Jon Lord's classical-infused organ work and Ritchie Blackmore's guitar riffs, made them one of the 'unholy trinity of British hard rock and heavy metal' alongside Led Zeppelin and Black Sabbath.",
      year_formed: '1968',
      city_of_origin: 'Hertford',
      country_of_origin: 'England',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Deep_Purple_in_2004.jpg/440px-Deep_Purple_in_2004.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=zUwEIt9ez7M',
    },
    {
      id: 10,
      band_name: 'The Eagles',
      genre: 'Rock, Country Rock',
      band_members:
        'Don Henley, Joe Walsh, Timothy B. Schmit, Deacon Frey, Vince Gill',
      best_song: 'Hotel California',
      bio: "Formed in Los Angeles in 1971, The Eagles became one of the world's best-selling bands with their harmonious sound. Their 1976 album 'Hotel California' is among the best-selling albums ever, and the title track is one of rock's most iconic songs.",
      year_formed: '1971',
      city_of_origin: 'Los Angeles',
      country_of_origin: 'United States',
      image_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Eagles_band_1975.jpg/440px-Eagles_band_1975.jpg',
      youtube_url: 'https://www.youtube.com/watch?v=EqPtz5qN7HM',
    },
  ])
}
