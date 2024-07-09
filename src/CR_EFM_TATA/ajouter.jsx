import { useState } from "react"

export default function Ajouter(props){
    const [V, setV] = useState({
        img:'',
        nom:'',
        prenom:''
    })
    return(
        <div>
            img url : <input onChange={(e)=>{
                setV({...V,img:e.target.value})
            }} /> <br></br>
            Nom : <input onChange={(e)=>{
                setV({...V,nom:e.target.value})
            }} /> <br></br>
            Prenom : <input onChange={(e)=>{
                setV({...V,prenom:e.target.value})
            }} /> <br></br>
            <button onClick={()=>{
                props.table.push(V)
            }}>
                Ajouter
            </button>
        </div>
    )
}