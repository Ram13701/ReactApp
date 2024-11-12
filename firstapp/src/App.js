import React from 'react'
import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App(){
  const[data,setData]=useState({fname:"Ravi", lname:"kumar"})
    function demo(){
      setData({...data, fname:"Ramesh"})
   }

  return(
    <>
   
    <h1>Hello</h1>
    My first name is {data.fname} and last name is {data.lname}
    <br/>
    <button onClick={demo}>update </button>
    
    </>
  )
}