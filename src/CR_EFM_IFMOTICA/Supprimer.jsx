import { useState } from "react"
export default function Supprimer(props){
    const [titreS, setTiteS] = useState();
    const supprimer = ()=>{
        props.setTable(props.table.filter((tb)=>tb.Titre.toLowerCase() !== titreS.toLowerCase()))
    }
    return(
        <div>
            <h6>supprimer un livres</h6>
            Titre : <input onChange={(e)=>{
                setTiteS(e.target.value);

            }} />
            <button onClick={()=>{
                supprimer()
            }}>
                Supprimer livres
            </button>
        </div>
    )
}