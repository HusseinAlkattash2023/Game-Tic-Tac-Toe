import React,{useContext} from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import { GameContext } from '../../context/Gamecontext'
function Start() {
  const{activeUser,setActiveUser,changePlayerMode}=useContext(GameContext)
  return (
    <div className='start'>
      <div className='start__header'>
        <Xicon/>
        <Oicon/>
      </div>
      <div className='card shadow-gray card_1'>
        <h1 className='text-xl'>pick player 1'St mark</h1>
        <div className='start__players'>
          <span className={activeUser==='x' ? 'start__players--active' : ""}
          onClick={()=>setActiveUser("x")}>
              <Xicon color={activeUser==="x" ? "dark" :"light"}/> 
          </span>
          <span className={activeUser==='o' ? 'start__players--active' : ""}
          onClick={()=>setActiveUser("o")}>
            <Oicon color={activeUser==="o" ? "dark" :"light"}/>
          </span>

        </div>
        <p className='text-light' >remember: x goes first</p>
      </div>
      <div className='start__btns'>
        <button className='btn btn-yellow' onClick={()=>changePlayerMode("cpu")}>new game (vs cpu)</button>
        <button className='btn btn-blue' onClick={()=>changePlayerMode("user")}>new game (vs player)</button>
      </div>
    </div>
  )
}
export default Start
