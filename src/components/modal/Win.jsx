import React,{useContext} from 'react';
import { GameContext } from '../../context/Gamecontext';
import Oicon from '../icons/Oicon';
import Xicon from '../icons/Xicon'

function Win() {
  const{winner,handleReset,handleNextRound}=useContext(GameContext)
  return (
    <div className='score'>
    {winner && winner !=="no" ? (
    <>
        <p>you win!</p>
        <h3 className={`score__title ${winner==="o" ? "text-yellow":"text-blue"}`}>
          {winner==='x' ? <Xicon/> : <Oicon/>}
          Takes the round
        </h3>
    </>):(
      <h3 className='score__title'>{winner==="no" && "No Winner"}</h3>
    )}
        <div className='score__btns'>
            <button className='btn btn-sm' onClick={handleReset}>Quit</button>
            <button className='btn btn-sm btn-yellow' onClick={handleNextRound}>next round</button>
        </div>
    </div>
  )
}

export default Win
