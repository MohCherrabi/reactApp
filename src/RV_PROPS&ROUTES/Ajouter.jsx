import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Ajouter(props){
    const navgate =useNavigate();
    const [Data, setData] = useState({
        id:0,
        prenom:'',
        marie:false,
        age:0
    })
    const Ajouter = ()=>{
        props.table.push(Data)
        navgate('/')

    }
    return (
        <div>
            prenom : <input  onChange={(e)=>setData({...Data,prenom:e.target.value})}/><br></br>
            marie : <input name="m" type="radio"onChange={(e)=>{
                setData(Data.marie ?{...Data,marie:true}:{...Data,marie:false})
            }}/><br></br>
             Nom marie : <input name="m" type="radio"onChange={(e)=>{
                setData(Data.marie ?{...Data,marie:true}:{...Data,marie:false})
            }}/><br></br>
            Age: <input type="number" onChange={(e)=>{
                setData({...Data,age:e.target.value})
            }}/><br></br>
            <button onClick={()=>{
                Ajouter()
            }}>
                Ajouter
            </button>
        </div>
    )
}