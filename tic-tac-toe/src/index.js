import { useState } from 'react'
import ReactDOM from 'react-dom/client'
const grid = [
  ['','',''],
  ['','',''],
  ['','','']
]
function TicTacToe() {
  const [playing, setPlaying] = useState(false)
  const [player, setPlayer] = useState(false)
  function mark(x, y) {
    if(playing && grid[y][x] === '') {
      grid[y][x] = player ? 'o' : 'x'
      setPlayer(!player)
    }
  }
  const classes = {
    '' : '',
    'x' : 'fa-solid fa-x',
    'o' : 'fa-regular fa-circle'
  }
  return (
    <main className="main-container">
      <h1>TIC TAC TOE</h1>
      <div className={'play-button' + (playing ? ' game-on' : '')} id="playButton" onClick={() => setPlaying(true)}><span>PLAY</span></div>
      <div className="ttt-container">
        <div className="grid-container">
          {grid.map((row, y) => row.map((cell, x) => (
            <div className="gridbox-item gridbox" key={y * 3 + x + 1} onClick={() => mark(x, y) }>
              <i className={classes[grid[y][x]]}></i>
          </div>
          )))}
        </div>
      </div>
    </main>
   )
}
document.getElementById('root')
ReactDOM.createRoot(document.getElementById('root')).render(<TicTacToe/>)

