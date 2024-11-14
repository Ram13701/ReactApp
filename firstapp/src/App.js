
import {useState, useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

    function App(){

      const [state, setstate]=useState([])
      useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')
        .then((res)=>res.json())
        .then((json)=>setstate(json.results))
      })
      

  return(
    <>
   
    <h1>Hello</h1>
     {state.map((list,index)=><li key={index}>{list.name.first}</li>)}

    </>
  )
   
}
export default App