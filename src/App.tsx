import { useEffect, useRef } from 'react'
import './App.css'
import { StarsBackground } from './background'
function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // shadow
    ctx.shadowColor = '#646cff'
    ctx.shadowBlur = 1
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    
    // stroke
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 1


    const cellSize = 16; 
    const rows = Math.floor(canvas.height / cellSize);
    const cols = Math.floor(canvas.width / cellSize);

    const grid = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * cellSize;
        const y = row * cellSize;
        
        ctx.strokeRect(x, y, cellSize, cellSize);
        
        grid.push({ row, col, x, y, width: cellSize, height: cellSize });
      }
    }

    console.log(grid)

  }, [])

  return (
    <main className='main'>
      <div>The game of life</div>
      <div>
        <canvas ref={canvasRef} width="1200" height="600" />
      </div>
      <StarsBackground/>
    </main>
  )
}

export default App
