import React from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import BoardCard from './BoardCard'
import { useContext } from 'react'
import { GameContext } from '../../context/Gamecontext'
function Board() {

  const{squares , xnext , ties , winner , winnerLine,handleNextRound}=useContext(GameContext);
  console.log(winner , winnerLine);
  return (
    <div className='bord'>
      <div className='board__header'>
        <div className='xoicon'>
        <Xicon/>
        <Oicon/>
        </div>
        <div className='board__turn'>
          {!xnext ? <Xicon color="light" size="sm"/>:<Oicon color="light"  size="sm"/>}turn
        </div>
        <div>
          <button className='btn btn-sm board__btn'  onClick={handleNextRound}>
          <svg 
        version="1.1"
        id="svg2" 
        x="0px" y="0px" width="20px" 
        height="20px"
        viewBox="0 0 1200 1200">
      <path id="path18745"  
    d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600
	c222.411,0,416.39-121.104,520.02-300.879L908.79,777.612C847.217,884.405,732.127,956.47,600,956.47
	c-196.873,0-356.47-159.597-356.47-356.47S403.127,243.53,600,243.53c84.387,0,161.732,29.521,222.729,78.589L665.186,434.18
	L1200,612.524V53.613l-174.17,123.926C917.124,67.952,766.553,0,600,0z"/>
  </svg>
          </button>
        </div>
      </div>
      <div className='board__body'>
        {squares.map((sq,ix)=>(
          <BoardCard 
          key={ix} 
          index={ix} 
          user={sq} 
          active={winner && winnerLine && winnerLine.includes(ix)}
          />
        ))}
      </div>
      <div className='board__footer'>
        <div className='card bg-blue'>
          <p className='text-light'>x (you)</p>
          <strong className='text-xxl'>{ties.x}</strong>
        </div>
        <div className='card bg-light'>
          <p className='text-light'>ties</p>
          <strong className='text-xxl'>{ties.x + ties.o}</strong>
        </div>
        <div className='card bg-yellow'>
          <p className='text-light'>o (cvu)</p>
          <strong className='text-xxl'>{ties.o}</strong>
        </div>
      </div>
    </div>
  )
}

export default Board
