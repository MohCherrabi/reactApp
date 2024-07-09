import { useState } from "react"
export default function Rechercher(props){
    const [TR, setTR]=useState([])
    const [NR, setNR]=useState()
    const Recher = ()=>{
        setTR(props.table.filter((T)=>{
            return T.name.toLowerCase().search(NR.toLowerCase()) !== -1 
        }))
    }
    return(
        <div>
            <input onChange={(e)=>setNR(e.target.value)}/><button onClick={()=>Recher()}>Rechercher</button>
            <ul>
                {TR.length !== 0? TR.map((T)=>{
                    return <li>id: {T.id}, name: {T.name}, name: {T.lastname}</li>
                }): "le element ne pas exists"}
            </ul>
        </div>
    )
}