import React from 'react';
import { useState  } from 'react'
import ReactDOM from 'react-dom/client'
import { FaRegCircle } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import Button from '@mui/material/Button';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe/> ,
  }
]);

var grid = getGrid()



function getGrid(){
  return  [
    ['','',''],
    ['','',''],
    ['','','']
  ]
}

function checkGame(grid){

  if(grid[0][0] !== '' && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] ){
    return true
  }
  if(grid[0][2] !== '' && grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0]){
    return true
  }

  for(var i = 0; i < 3; i++){
    if(grid[0][i] !== '' && grid[0][i] === grid[1][i] && grid[0][i] === grid [2][i] || 
       grid[i][0] !== '' && grid[i][0] === grid[i][1] && grid[i][0] === grid [i][2]  ){
        return true
       }
      
   }
  
  return false
}



function TicTacToe() {
  
  const [playing, setPlaying] = useState(false)
  const [player, setPlayer] = useState(false)
  const [moves, setMoves] = useState(0)
  const [score ,setScore] = useState({x : 0,o : 0})
  
  function play() {
    setPlaying(true)
    grid = getGrid()
  }

  function mark(x, y) {
    
    if(playing && grid[y][x] === '') {
      grid[y][x] = player ? 'o' : 'x'
      setMoves(moves+1)
      if(checkGame(grid) || moves === 8) {
        console.log(player ? 'o' : 'x')     
        setPlaying(false)
        if(checkGame(grid)){
          if(player){
            setScore({x: score.x, o: score.o+1})
          }else{
            setScore({x: score.x+1, o: score.o})
          }
        }
      
        setMoves(0)
      }
      setPlayer(!player) 
    }
  }

  return (
    <main className="main-container">
      
      <h1>TIC TAC TOE</h1>
      { 
      !playing && <Button   onClick={play} variant="contained">Play</Button>
      }
      <div> < HiXMark/> = {score.x} ||<FaRegCircle/>   = {score.o}  </div>
      <div className="ttt-container">
        <div className="grid-container">
          {grid.map((row, y) => row.map((cell, x) => (
            <div className="gridbox-item gridbox" key={y * 3 + x + 1} onClick={() => mark(x, y) }>
              {grid[y][x] === 'x' && (< HiXMark/>) }
              {grid[y][x] === 'o' && (<FaRegCircle/>) }
          </div>
          
          )))}
        </div>
      </div>
    </main>
   )
}

document.getElementById('root')
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>)

