import React from 'react';
import { useNavigate } from 'react-router-dom'

const Publishers = ({gamePublishers, handlePublisherClick}) => {


let navigate = useNavigate();


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'safe center',
        height: '35vh'
      }}
    > 
      
      {gamePublishers.map((gamePublisher, index) => {
        return (
          <div key={index}
          style={{
            justifyContent: 'center',
            width: 400,
            height: 250

          }}>
            <h2>{gamePublisher.name}</h2>
            <img style={{
            height: 250,
            width: 350,
            top:100
          }}src={`${gamePublisher.publisher_image_url}`} onClick={() => {
            handlePublisherClick(gamePublisher)
            let path = `/PublisherInfo`
            navigate(path)}}/>
            

            <h3>HQ: {gamePublisher.hq}</h3>
            

            <hr />
          </div>
        )
      })}
    </div>
  );
};

export default Publishers;

