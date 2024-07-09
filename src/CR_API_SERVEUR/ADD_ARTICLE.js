import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AJOUTER_ART(){
    const navigate = useNavigate();
    const [values, setValues] = useState({id:0,nomA:'',pu:0,Qt:0})
    useEffect(()=>{
        axios.get("http://localhost:3031/Articles")
        .then(res => {
        setValues({...values,id:res.data[res.data.length-1].id+1})})
    },[])
    const Ajouter = ()=>{
            axios.post("http://localhost:3031/Articles",values)
            .then((res)=>{ alert('bien ajouter')
           }).catch(err=>alert('erreur ajout'))

            navigate('/')
        
    }
    
    return(
        <div>
            Nom Article : <input onChange={(e)=>{
                setValues({...values,nomA:e.target.value})
                console.log(values)
            }} /><br/>
            Prix : <input onChange={(e)=>{
                setValues({...values,pu:e.target.value})
                console.log(values)
            }} type="number" /><br/>
            Qte : <input type="number" onChange={(e)=>{
                setValues({...values,Qt:e.target.value})
                console.log(values)
            }} /><br/>
            <button onClick={()=>Ajouter()}>Ajouter </button>
        </div>
    )
}