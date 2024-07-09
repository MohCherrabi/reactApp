import { useState } from "react"
import { useDispatch } from "react-redux";
import { Supprimer } from "./sliceLivres";
export default function SupprimerR(){
    const dispatch = useDispatch()
    const [VS, setVS] = useState()
    const Sup = ()=>{
        dispatch(Supprimer(VS.toLowerCase()))
    }
    return(
        <div>
            <input onChange={(e)=>{
                setVS(e.target.value)
            }} />
            <button onClick={()=>{
                Sup()
            }}>
                Supprimer
            </button>
        </div>
    )
}