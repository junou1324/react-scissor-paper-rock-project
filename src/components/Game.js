import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Game = ({score,myChoice,setScore}) => {

  const [house, setHouse]=useState("");
  const [playerWin,setPlayerWin] = useState("");

  const newHousePick=()=>{
    const choices=["rock","paper","scissors"];
    setHouse(choices[Math.floor(Math.random()*3)]);
  }
  useEffect(()=>{
    newHousePick();
  }
  ,[])
  const Result=()=>{
    if(myChoice=="rock" && house=="scissors"){
      setPlayerWin("win");
      setScore(score+1);
    }else if(myChoice=="rock" && house=="paper"){
      setPlayerWin("lose");
      setScore(score-1);
    }else if(myChoice=="paper" && house=="scissors"){
      setPlayerWin("lose");
      setScore(score-1);
    }else if(myChoice=="paper" && house=="rock"){
      setPlayerWin("win");
      setScore(score+1);
    }else if(myChoice=="scissors" && house=="paper"){
      setPlayerWin("win");
      setScore(score+1);
    }else if(myChoice=="scissors" && house=="rock"){
      setPlayerWin("lose");
      setScore(score-1);
    }
    else{
      setPlayerWin('draw');
    }
  }

useEffect(()=>{
  Result();
}
,[house])
  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div className={`icon icon--${myChoice} ${playerWin=="win"?`icon icon--${myChoice}--winner`:''}`}></div>
      </div>

      {playerWin=="win" && <div className="game__play">
        <span className="text">You Win</span>
        <Link to="/" className="play-again"onClick={()=>setHouse()}>Play Again</Link>
      </div>}
      {playerWin=="lose" && <div className="game__play">
        <span className="text">You lose</span>
        <Link to="/" className="play-again"onClick={()=>setHouse()}>Play Again</Link>
      </div>}
      {playerWin=="draw" && <div className="game__play">
        <span className="text">Draw</span>
        <Link to="/" className="play-again"onClick={()=>setHouse()}>Play Again</Link>
      </div>}

      <div className="game__house">
        <span className="text">The House Picked</span>
        <div className={`icon icon--${house} ${playerWin=="lose"?`icon icon--${house }--winner`:''}`}></div>
      </div>
      
    </div>
  )
}

export default Game

/** 
 *    my choice:{myChoice}<br/>
      House Choice:{house}<br/>

      Result:
      {playerWin=="win" && <h2>You Win</h2>}
      {playerWin=="lose" && <h2>You Lose</h2>}
      {playerWin=="draw" && <h2>You Draw</h2>}
      <Link to="/" onClick={()=>setHouse()}>Play Again</Link>
 * 
*/