import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameInfo from './GameInfo';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Games = ({ videoGames, gamePublishers, handleGameClick }) => {

// console.log(videoGames, 'games')
// console.log(gamePublishers, 'publishers')

let navigate = useNavigate();

// const handleClick = event => {
//   let path = `/GameInfo`
//   navigate(path)

//   const newPublisher = gamePublishers.filter(publisher =>{
//     return publisher.id == `${imageIdKey}`
//   }
//   )
// console.log(imageIdKey, 'classname')
// anotherImageKey = imageIdKey

//   // setImageKey(imageIdKey.toString)
// }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'safe center',
        height: '35vh'
      }}
    >   
    
    
      
      {videoGames.map((videoGame, index) => {
        return (
          <div key={index}
          style={{
            justifyContent: 'center',
            width: 400,
            height: 250

          }}>
            
            <h2>{videoGame.name}</h2>
            <img className={videoGame.id}style={{
            height: 250,
            width: 200,
            top:100
          }}src={`${videoGame.game_image_url}`} onClick={() =>{
            handleGameClick(videoGame)
            let path = `/GameInfo`
            navigate(path)}}/>
          
            <h3>Released: {videoGame.release_date}</h3>
            
            <hr />
          </div>
        )
      })}
    </div>
  );
};

export default Games;