import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Request from './Request'

function App() {
  let [data,setData]=useState("hello");

  let sendReqs=async()=>{
    let data=await axios.get("/api/demo");
    console.log(data);
  }

  return (  
    <>
      <Request sendReq={sendReqs} data={data}/>
    </>
  )
}

export default App
