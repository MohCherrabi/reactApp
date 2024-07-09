import { useEffect,useState } from "react";
import axios from "axios";
  export default function App1(){
    const[inp, setINP]=useState()
    useEffect(()=>{
      console.log('hello')
    })
    return<>
    <input type="text" onChange={(e)=>setINP(e.target.value)}/>
    </>

  }