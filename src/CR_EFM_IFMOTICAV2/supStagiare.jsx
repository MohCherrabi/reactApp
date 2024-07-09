import { useState } from "react"
export default function Supprimer(props){
    const [VS, setVS] = useState()
    return(
        <div>
            Nom : <input onChange={(e)=>{
                setVS(e.target.value)
            }}/><br/>
            <button onClick={()=>{
                props.setTable(props.table.filter((tb)=>tb.nom.toLowerCase() !==VS.toLowerCase()))
            }}>
                Suppimer Stagiare 
            </button>
        </div>
    )
}