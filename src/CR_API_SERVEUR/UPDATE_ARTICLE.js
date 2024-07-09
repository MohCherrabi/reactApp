import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
export default function UPDATE_ARTICLE(){
    const navigate = useNavigate();
    const {idd} = useParams();
    const [values, setValues] = useState({id:0,nomA:'',pu:0,Qt:0})
    const [data, setData] = useState();
    console.log(idd)
    async function func(){
        await axios.get(`http://localhost:3031/Articles/${idd}`)
        .then(res => {
        console.log("from useEffect: ",res.data)
        setData(res.data)
        setValues({...values,id:res.data.id,nomA:res.data.nomA,pu:res.data.pu,Qt:res.data.Qt})
    })
    }
    
    useEffect(()=>{func()},[])
    const Modifier = ()=>{
            axios.put(`http://localhost:3031/Articles/${idd}`,values)
            .then((res)=>{ alert('bien modifier')
           }).catch(err=>alert('erreur de modification'))
            navigate('/')
    }
    
    return(
        <div>
            Nom Article : <input value={values.nomA} onChange={(e)=>{
                setValues({...values,nomA:e.target.value})
                console.log('from return :',values)
            }} /><br/>
            Prix : <input  value={values.pu}  onChange={(e)=>{
                setValues({...values,pu:e.target.value})
                console.log(values)
            }} type="number" /><br/>
            Qte : <input  value={values.Qt}  type="number" onChange={(e)=>{
                setValues({...values,Qt:e.target.value})
                console.log(values)
            }} /><br/>
            <button onClick={()=>Modifier()}>Ajouter </button>
        </div>
    )
}