import { Ajouter } from "./sliceLivres";
import {useDispatch} from 'react-redux'
import {useState} from 'react';
export default function AjouterL(){
    const dispatch = useDispatch();
    const [VLivres, setVLivers] = useState({
        Titre:'',
        Auteur:'',
        nbpages:0,
        photo:''
    })
return(
    <div>
        Titer : <input onChange={(e)=>setVLivers({...VLivres,Titre:e.target.value})}/><br></br>
        Auteur : <input onChange={(e)=>setVLivers({...VLivres,Auteur:e.target.value})}/><br></br>
        Nomber des pages : <input type="number" onChange={(e)=>setVLivers({...VLivres,nbpages:e.target.value})}/><br></br>
        choisir une photo : <input type="file" onChange={(e)=>setVLivers({...VLivres,photo:e.target.files[0].name})}/><br></br>
        <button onClick={()=>{
            dispatch(Ajouter(VLivres))
        }}>
            Ajouter
        </button>
    </div>
)
}