
import {useState, useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

    function App(){

      const [state, setstate]=useState()
      useEffect(()=>{
        console.log("Mounted")
      })
 

  return(
    <>
   
    <h1>Hello</h1>

    </>
  )
   
}
export default App