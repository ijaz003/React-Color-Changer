import { useState } from "react"

function App() {
  const[Color,setCount]=useState("black")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:Color,color:"green"}}>
      <div className="flex flex-wrap fixed justify-center rounded bottom-12 px-10 py-7 w-full">
        <div className="flex flex-wrap justify-center rounded-3xl px-10 py-5 gap-20"style={{backgroundColor:"white"}}>
          <button onClick={()=>{
            setCount("blue")
          }} className="rounded-3xl px-3" style={{backgroundColor:"blue",border:"1px solid black",color:"white"}}>Blue</button>
          <button onClick={()=>{
            setCount("pink")
          }} className="rounded-3xl px-3" style={{backgroundColor:"pink",border:"1px solid black",color:"white"}}>Pink</button>
          <button onClick={()=>{
            setCount("brown")
          }} className="rounded-3xl px-3" style={{backgroundColor:"brown",border:"1px solid black",color:"white"}}>Brown</button>
          <button onClick={()=>{
            setCount("orange")
          }} className="rounded-3xl px-3" style={{backgroundColor:"orange",border:"1px solid black",color:"white"}}>orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
