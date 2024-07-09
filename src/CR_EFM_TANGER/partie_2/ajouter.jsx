import { Add } from "./stagaireSlice";
import {useState} from 'react';
import { useDispatch } from "react-redux";
export default function Ajouter(){
    const [SgV, setSgV]  = useState({})
    const dispatch = useDispatch();
    return(
        <div>
            Nom : <input onChange={(e)=>{
                setSgV({...SgV,nom:e.target.value})
            }}/><br/>
            photo : <input type="file" onChange={(e)=>{
                setSgV({...SgV,image:e.target.files[0].name})
            }}/><br/>
            <button onClick={()=>{
                dispatch(Add(SgV))
            }}>
                Ajouter
            </button>
        </div>
    )
}