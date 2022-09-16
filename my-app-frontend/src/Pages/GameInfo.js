import React from 'react';

function GameInfo({ gamePublishers, gameClicked, gameGenres }) {





const newPublishers = gamePublishers.filter(publisher =>{
      return publisher.id == gameClicked.id
})



const newGenres = gameGenres.filter(genre => {
      return genre.id == gameClicked.genre_id
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
    
      {newPublishers.map((newPublisher, index) => {
        return (
          <div key={index}
          style={{
            justifyContent: 'center',
            width: 400,
            height: 250

          }}>
            
            <h2>Publisher: {newPublisher.name}</h2>
            <img className={newPublisher.id}style={{
            height: 250,
            width: 200,
            top:100
          }}src={`${newPublisher.publisher_image_url}`}/>
          
            

            <h3>HQ: {newPublisher.hq}</h3>
            

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

export default GameInfo;