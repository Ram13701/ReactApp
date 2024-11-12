import React from 'react'
import {useState} from 'react'
export default function App(){
  const[data, setData]=useState("Student Tribe")
  const handler=()=>{
    setData(" Hi-Tech City")
  }
  return(
    <>
    <h1>App Component</h1>
    <h3>{data}</h3>
    <button onClick={handler}>Update State</button>
    </>
  )
}