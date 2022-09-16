puts "Deleting Data"
Genre.destroy_all
Publisher.destroy_all
Game.destroy_all

puts "Creating Genres..."

g1 = Genre.create(name: 'Horror', genre_image_url: 'https://i.pinimg.com/474x/d1/5d/fc/d15dfc114fdc960e17d3e02710dbcbe1--forest-wallpaper-dark-gothic.jpg')
g2 = Genre.create(name: 'FPS', genre_image_url: 'https://cdn-icons-png.flaticon.com/512/865/865405.png')
g3 = Genre.create(name: 'RPG', genre_image_url: 'https://cdn0.iconfinder.com/data/icons/game-genre-outline/64/Game_Genre_RPG-512.png')
g4 = Genre.create(name: 'Sandbox', genre_image_url: 'https://i0.wp.com/gaming-sandbox.com/wp-content/uploads/2021/06/gs_logo_icon_grey-bg_white.png?fit=3334%2C3334&ssl=1')
g5 = Genre.create(name: 'Puzzler', genre_image_url: 'https://cdn0.iconfinder.com/data/icons/octicons/1024/puzzle-512.png')
g6 = Genre.create(name: 'Survival', genre_image_url: 'https://static.thenounproject.com/png/3857130-200.png')

puts "Creating Publishers..."

p1 = Publisher.create(name: 'Riot Games', hq: 'West Los Angeles, CA', publisher_image_url: 'https://esports-news.co.uk/wp-content/uploads/2022/01/riot-games-2022-logo-1024x490.jpg')
p2 = Publisher.create(name: 'Valve', hq: 'Bellevue, WA', publisher_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Valve-logo.jpg/1200px-Valve-logo.jpg')
p3 = Publisher.create(name: 'Bethesda', hq: 'Rockville, MD', publisher_image_url: 'https://images.ctfassets.net/rporu91m20dc/4gNvwblcIUQMAa0QWakgAk/64625a987bad1812862748367703938b/BGS_LargeHero_Future.jpg')
p4 = Publisher.create(name: 'Activison Blizzard', hq: 'Santa Monica, CA', publisher_image_url: 'https://cdn1.dotesports.com/wp-content/uploads/2021/10/26094110/activision-blizzard-logo-18809.jpg')

puts "Creating Games..."

Game.create(name: 'Valorant', release_date: 'June 2, 2020', publisher_id: p1.id, genre_id: g2.id, game_image_url:'https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg')
Game.create(name: 'CSGO', release_date: 'August 21, 2012', publisher_id: p2.id, genre_id: g2.id, game_image_url: 'https://i.imgur.com/VmKI35D.png')
Game.create(name: 'Skyrim', release_date: 'November 11, 2011', publisher_id: p3.id, genre_id: g3.id, game_image_url: 'https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg')
Game.create(name: 'Black Ops 2', release_date: 'November 12, 2012', publisher_id: p4.id, genre_id: g2.id, game_image_url: 'https://upload.wikimedia.org/wikipedia/en/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png')





puts "✅ Done seeding!"
