import React from 'react'
import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App(){
    let uid=prompt("enter uid")
    const[user, setUser]=useState(uid)
    if(uid=="React"){
        setUser("Authorised user")
    }else{
        setUser("UnAuthorised user")
    }

  return(
    <>
    <h1>App Component</h1>
    
    </>
  )
}