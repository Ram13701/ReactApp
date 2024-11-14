
import {useState, useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

    function App(){

      const [state, setstate]=useState(0)
      const [data, setData]=useState(100)
      useEffect(()=>{
        console.log("Mounted")
      },[state])
      const add=()=>{
        setstate(state+1)
      }
      const del=()=>{
        setData(data-1)
      }

  return(
    <>
   
    <h1>Hello</h1>
    <h3>{state}</h3>
    <h3>{data}</h3>
    <button onClick={add}>increment</button>
    <button onClick={del}>decrement</button>

    </>
  )
   
}
export default App