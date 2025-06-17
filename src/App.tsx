import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#fff'
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
