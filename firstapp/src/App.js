import React from 'react'
import {useState} from 'react'
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
    <button onClick={add}>increment</button>
    <button onClick={del}>decrement</button>
    </>
  )
}