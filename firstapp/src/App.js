import React from 'react'
import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App(){
  const[data, setData]=useState(0)
  const add=()=>{
    setData(data+1)
  }
  const del=()=>{
    setData(data-1)
  }
  return(
    <>
    <h1>App Component</h1>
    <h3>{data}</h3>
    <button onClick={add} className='btn btn-success'>Add+</button>
    <br></br>
    <br></br>
    <button onClick={del} className='btn btn-danger'>minus-</button>
    </>
  )
}