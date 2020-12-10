import React from 'react';
import Header from './header'
import Players from './components/players'
import Counter from './components/Counter'


const player = [
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
];


function App(props) {
  return <div>
      <Header totalPlayers = {4} title={'Scoreboard'} />

      {props.initialPlayers.map( player => 
         <Players 
         name={player.name}
        />,

         <Counter
          score={player.score}
          />

      )}

      <Players name="Player 1" />
        <Counter score="15"/>

      <Players name="Player 2" />
        <Counter score="35"/>

         <Players name="Player 3" />
        <Counter score="44"/>

     <Players name="Player 4" />
        <Counter score="26"/>
  </div>
}




export default App