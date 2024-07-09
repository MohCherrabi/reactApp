import { useState } from "react";
import { useDispatch } from "react-redux";
import {Ajouter} from './sliceLivres';
export default function AjouterS(){
    const dispatch = useDispatch();
    const [tbale, setTbale] = useState({
        Id:0,
        Nom:'',
        Filière:''
    })
    const Aj = ()=>{
        dispatch(Ajouter(Ajouter))
    }
    return(
        <div>
            Id : <input onChange={(e)=>{
                setTbale({...tbale,Id:e.target.value})
            }}/>
            Nom : <input onChange={(e)=>{
                setTbale({...tbale,Nom:e.target.value})
            }}/>
            Filière : <input onChange={(e)=>{
                setTbale({...tbale,Filière:e.target.value})
            }}/>
            <button onClick={()=>{
                Aj()
            }}>
                Ajouter 
            </button>
        </div>
    )
}