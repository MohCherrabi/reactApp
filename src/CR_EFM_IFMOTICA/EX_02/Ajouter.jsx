import { useDispatch } from "react-redux";
import { Ajouter } from "./sliceLivres";
import { useState } from "react";
export default function AjouterR(){
    const [values,setValues ] = useState({
        Id:0,
        Titre:'',
        NombresPages:0
    })
    const dispatch = useDispatch();
    return(
        <div>
            Id : <input onChange={(e)=>{
                setValues({...values,Id:e.target.value})
            }}/>
            Titre : <input onChange={(e)=>{
                setValues({...values,Titre:e.target.value})
            }}/>
            Nombre des Pages : <input type="number" onChange={(e)=>{
                setValues({...values,NombresPages:e.target.value})
            }}/>
            <button onClick={()=>{
                dispatch(Ajouter(values))
            }}>
                Ajouter
            </button>
        </div>
    )
}
