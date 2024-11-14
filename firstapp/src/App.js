
import {useState, useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

    function App(){

      const [state, setstate]=useState([])
      useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')
        .then((res)=>res.json())
        //.then((json)=>setstate(json.results))
        .then((json)=>setstate(json))
      })
      

  return(
    <>
   
    <h1>Hello</h1>
     {state.map((list,index)=><li key={index}>{list.title}</li>)}

    </>
  )
   
}
export default App