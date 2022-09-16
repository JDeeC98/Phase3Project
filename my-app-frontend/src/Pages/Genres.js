import React from 'react';
import { useNavigate } from 'react-router-dom';



const Genres = ({gameGenres, handleGenreClick}) => {

let navigate = useNavigate();


  console.log(gameGenres, 'help me')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'safe center',
        height: '35vh'
      }}
    > 
      
      {gameGenres.map((gameGenre, index) => {
        return (
          <div key={index}
          style={{
            justifyContent: 'center',
            width: 300,
            height: 250

          }}>
            <h2>{gameGenre.name}</h2>
            <img style={{
            height: 250,
            width: 200,
            top:100
          }}src={`${gameGenre.genre_image_url}`} onClick={() =>{
            handleGenreClick(gameGenre)
            let path = `/GenreInfo`
            navigate(path)}}/>
            
            <hr />
          </div>
        )
      })}
    </div>
  );
};

export default Genres;
