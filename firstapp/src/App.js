
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
    <div className='container'>
      <div className='row'>
        {state.map((list)=>
        <div className='col-md-4'>
          <div className="card">
            <img src={list.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{list.price}</h5>
    <h3 className="card-text">{list.title}</h3>
  </div>
</div> 
        </div>
      )}
      </div>
    </div>


     {/* {state.map((list,index)=><li key={index}>{list.title}</li>)} */}

    </>
  )
   
}
export default App