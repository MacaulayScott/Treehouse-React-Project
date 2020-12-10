import React from 'react';
import './header.css' 

const Header = (props) => (
    <header>
      <h1 className="score">{props.title}</h1>
<span className="stats">Player :  {props.totalPlayers}</span>
    </header>
  );



export default Header;