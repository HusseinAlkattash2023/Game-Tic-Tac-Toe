 import React,{useContext} from 'react'; 
import Start from './components/start/Start';
import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import {GameContext} from './context/Gamecontext';
function App() {
  const{screen}=useContext(GameContext);
  return (
    <div className="App">
      <div className='container'>
        {screen === 'start' && <Start/> }
        {screen === 'game' && <Board/>}
      </div>
      <Modal/>
    </div>
  );
}

export default App;
