import { useState } from "react"

export default function Rechercher(props){
    const [VR, steVR] = useState()
    const [TR, setTR] = useState([])
    const Rechercher = ()=>{
        setTR(props.table.filter((pr)=>pr.prenom.toLowerCase().search(VR.toLowerCase())!== -1))
    }
    return (
        <div>
            Rechercher : <input onChange={(e)=>{
                steVR(e.target.value)
                
            }}/>
            <button onClick={()=>{
                Rechercher()
            }}>
                Rechercher
            </button>
            <ul>
                {TR.map((pr)=>{
                    return <li>prenom est : {pr.prenom} la sutaution de familler est : {pr.marie} l'age est :{pr.age}</li>
                })}
            </ul>
            
        </div>
    )
}