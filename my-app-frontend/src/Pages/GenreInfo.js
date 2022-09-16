import React from 'react';

function GenreInfo({ genreClicked, videoGames }) {

const newGames = videoGames.filter(games =>{
      return games.genre_id == genreClicked.id
})



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


    </div>
  
  );

}

export default GenreInfo;