import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // define a shadow
    ctx.shadowColor = '#646cff'
    ctx.shadowBlur = 3
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    
    // stroke
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 2
    
    // retângulo
    ctx.strokeRect(10, 10, 1000, 500)
  }, [])

  return (
    <main>
      <div>The game of life</div>
      <div>
        <canvas ref={canvasRef} width="1100" height="600" />
      </div>
    </main>
  )
}

export default App
