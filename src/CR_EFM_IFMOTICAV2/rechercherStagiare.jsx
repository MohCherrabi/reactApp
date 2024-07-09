import { useState } from "react";

export default function RechercheStagiare(props){
    const [TR, setTR] = useState(props.table)
    return(
        <div>
            Rechercher : <input onChange={(e)=>{
                setTR(TR.filter((tb)=>tb.nom.toLowerCase().search(e.target.value.toLowerCase()) !== -1))
                if(TR.length == 0){
                    setTR(props.table)
                }
            }}/>
            <h1>Liste des Stagaires </h1>
            {TR.map((tb)=>{
                return(
                    <div className="d-inline-block">
                        <img src={tb.photo}/><br></br>
                        Nom et prenom : {tb.nom} {tb.prenom}<br/>
                        Ville : {tb.Ville}<br/>
                        Filere : {tb.Fil}<br/>
                        <button>
                            Supprimer
                        </button>
                    </div>
                )
            })}
        </div>
    )
}