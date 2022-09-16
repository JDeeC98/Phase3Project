import React from 'react';

function PublisherInfo({ publisherClicked, videoGames, gameGenres }) {

const newGames = videoGames.filter(games =>{
      return games.id == publisherClicked.id
})

console.log('publisher clicked', publisherClicked)

const newGenres = gameGenres.filter(genre => {
      return genre.id == newGames.genre_id
})

console.log(newGames, 'genre id')
console.log('new genre', newGenres)


return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'safe center',
        height: '35vh'
      }}
    > 
    
      {newGames.map((newGame, index) => {
        return (
          <div key={index}
          style={{
            justifyContent: 'center',
            width: 400,
            height: 250

          }}>
            
            <h2>{newGame.name}</h2>
            <img className={newGame.id}style={{
            height: 250,
            width: 200,
            top:100
          }}src={`${newGame.game_image_url}`}/>
          
            

            <h3>Released: {newGame.release_date}</h3>
            

            <hr />
          </div>
        )
      })}

{newGenres.map((newGenre, index) => {
        return (
          <div key={index}
          style={{
            justifyContent: 'center',
            width: 400,
            height: 250,
            

          }}>
            
            <h2>Genre: {newGenre.name}</h2>
            <img className={newGenre.id}style={{
            height: 300,
            width: 250,
            top:100
          }}src={`${newGenre.genre_image_url}`}/>
          
            

            
            

            <hr />
          </div>
        )
      })}
    </div>
  
  );

}

export default PublisherInfo;