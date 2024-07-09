import { useState } from "react";

export default function AjouterStagaire(props){
    const [Stagaire, setStgaire] = useState({});
    return(
        <div>
            Nom : <input onChange={(e)=>{
                setStgaire({...Stagaire,nom:e.target.value})
            }}/><br></br>
                Prenom : <input onChange={(e)=>{
                setStgaire({...Stagaire,prenom:e.target.value})
            }}/><br></br>
            Filier : <input onChange={(e)=>{
                setStgaire({...Stagaire,filier:e.target.value})
            }}/><br></br>
            Images : <input type="file" onChange={(e)=>{
                setStgaire({...Stagaire,image:e.target.files[0].name})
            }}/><br></br>
        <button onClick={()=>{
            props.table.push(Stagaire)
        }}>
            Ajouter
        </button>
        </div>
    )
}