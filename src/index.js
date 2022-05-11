import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './context/ModalCotext';
import { GameState } from './context/Gamecontext';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalState>
      <GameState>
      <App />
      </GameState>
    </ModalState>
  </React.StrictMode>
);

 
 
