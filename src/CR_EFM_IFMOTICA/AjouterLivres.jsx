import { useState } from "react";
export default function AjouterLives(props){
    const [VLivres, steVLivres] = useState({
        Titre:'',
        nbpages:0,
        Autuer:'',
        photo:''
    })
    
    console.log(VLivres.photo)
return (
    <div>
            <h1>
                Ajouter un Livres
            </h1>
            <div>
                Titre : <input onChange={(e)=>{
                    steVLivres({...VLivres, Titre:e.target.value})
                }}/><br></br>
                Nombre Pages : <input type="number" onChange={(e)=>{
                    steVLivres({...VLivres, nbpages:e.target.value})
                }} /><br></br>
                Auteur : <input type="text" onChange={(e)=>{
                    steVLivres({...VLivres, Autuer:e.target.value})
                }} /><br></br>
                Photo : <input type='file' onChange={(e)=>{
                    steVLivres({...VLivres, photo:e.target.files[0].name})
                                   }}/><br></br>
                <button
                onClick={()=>{
                    props.setTable([...props.table,VLivres])
                }}>
                    Aouter Livres
                </button>
            </div>
        </div>
    )


}