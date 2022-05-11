import { useEffect } from 'react';
import {createContext , useState , useContext} from 'react'
import { calcBestMove, calcWinner } from '../helpers/calcSquares';
import { ModalContext } from './ModalCotext';
const GameContext=createContext();

const GameState=(props)=>{
    const{showModal , setModalMode ,hideModal}=useContext(ModalContext);
    const[screen,setScreen]=useState('start'); // start or game
    const[activeUser,setActiveUser]=useState("x");// x or o
    const[playMode,setPlayMode]=useState("user"); // user or computer
    const[squares,setSquares]=useState(new Array(9).fill(""));
    const[xnext,setXnext]=useState(false);

    const[winner , setWinner]=useState(null);
    const[winnerLine , setWinnerLine]=useState(null);
    const[ties,setTies]=useState({x:0 , o:0});
    const changePlayerMode=mode=>{
        setPlayMode(mode);
        setScreen("game")
    }
    useEffect(()=>{
        checkNoWinner();
        const currentUser=xnext ? 'o' : 'x';
        if(playMode==='cpu' && currentUser!==activeUser && !winner){
            cpuNextCpu(squares);
            
        }
    },[xnext,winner,screen]);
    const handleSquareClick=(ix)=>{
        if(squares[ix] || winner){
            return;
        }
        const currentUser=xnext ? 'o' : 'x';
        if(playMode==='cpu' && currentUser !== activeUser){
            return;
        }
        let ns=[...squares];
        ns[ix]=!xnext ? 'x' :'o';
        setSquares(ns);
        setXnext(!xnext);
        checkWinner(ns)
    };
    const checkWinner=(ns)=>{
        const isWinner=calcWinner(ns);
        const ti={...ties};
        if(isWinner){
            setWinner(isWinner.winner);
            setWinnerLine(isWinner.line);
            
            ti[isWinner.winner]+=1;
            setTies(ti);
            showModal();
            setModalMode("winner");
        }
        
    }
    const handleReset=()=>{
        setSquares(new Array(9).fill(""));
        setXnext(false);
        setWinner(null);
        setWinnerLine(null);
        setActiveUser('x');
        setTies({x:0 , o:0});
        hideModal();
        setScreen('start')
    }
    const handleNextRound=()=>{
        setSquares(new Array(9).fill(""));
        setXnext(winner==='x');
        setWinner(null);
        setWinnerLine(null);
        hideModal();
    }
    const checkNoWinner=()=>{
        const moves=squares.filter((sq)=>sq==="");
        if(moves.length===0){
            setWinner('no')
            setModalMode("winner");
            showModal();
        }
    };
    const cpuNextCpu=(sq)=>{
        const bestMove=calcBestMove(sq,activeUser==="x" ? "o" :"x");
        let nt =[...squares];
        nt[bestMove]=(!xnext) ? "x" : "o";
        setSquares(nt);
        setXnext(!xnext);
        checkWinner(nt);
    };
    return (<GameContext.Provider 
    value={ 
        {  
            screen,
            activeUser,
            squares,
            xnext,
            ties,
            winner,
            winnerLine,
            handleReset,
            handleNextRound,
            checkNoWinner,
            handleSquareClick,
            setActiveUser,
            changePlayerMode,
        }
        }>
        {props.children}
        </GameContext.Provider>)
}
export {GameContext,GameState}