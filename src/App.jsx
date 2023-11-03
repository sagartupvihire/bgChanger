import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor : color}}>
    <div className="fixed flex flex-wrap">test</div>
    </div>
  )
}

export default App
