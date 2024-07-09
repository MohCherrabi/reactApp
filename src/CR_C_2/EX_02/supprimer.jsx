import { Supprimer } from "./sliceLivres";
import {useDispatch} from 'react-redux';
import {useState} from 'react';
export default function SupprimerL(){
    const [VS, setVS] = useState();
    const dispatch = useDispatch()
    return (
        <div>
            Titre de livre pour supprimer : <input onChange={(e)=>setVS(e.target.value)}/>
            <button onClick={()=>{
                dispatch(Supprimer(VS))
            }}>
                Supprimer
            </button>
        </div>
    )
}