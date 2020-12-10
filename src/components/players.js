import React from 'react'
import './players.css'

const Players = (props) => {
    return (
      <div className="player">
        <span className="player-name">{props.name}</span> <br />
      </div>

      
    );
  }



export default Players;