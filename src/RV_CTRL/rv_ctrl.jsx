import { useState } from "react";

export default function App(){
    const [VT, setVT] = useState([]);
    const [VRT, setVRT] = useState([]);
    const [V, setV] = useState({
        nom:'',
        prenom:'',
        poste:'',
        photo:''
    })
    const Ajouter = ()=>{
        const T = [...VT,V]
        setVT(T);
    }
    const Rechercher = (el)=>{
        setVRT(VT.filter((t)=>t.nom.toLowerCase().search(el.toLowerCase())!==-1));
    }
    return(
        <div>
            <div>
            Nom Joueur : <input onChange={(e)=>{
                setV({...V,nom:e.target.value})
            }} /><br></br>
            Prenom Joueur : <input onChange={(e)=>{
                setV({...V,prenom:e.target.value})
            }} /><br></br>
            poste Joueur :<br></br> DEFENSUR<input  name="M" type="radio" onChange={(e)=>{
                setV({...V,poste:"DEFENSUR"})
            }} />
            MILIEU<input name="M" type="radio" onChange={(e)=>{
                setV({...V,poste:"MILIEU"})
            }} />
            ATTAQUANT<input  name="M"  type="radio" onChange={(e)=>{
                setV({...V,poste:"ATTAQUANT"})
            }} /><br/>
            Photo : <input type="file" onChange={(e)=>{
                setV({...V,photo:e.target.files[0].name})
            }}/><br/>
            <button onClick={()=>{
                Ajouter()
            }}>
                Ajouter Client
            </button>
            </div>
            {VT.map((t)=>{
                return(
                    <div className="d-inline-block">
                        <img src={t.photo}/><br></br>
                        {t.nom} {t.prenom} <br></br>
                        {t.poste}
                    </div>
                )
            })}
            <div>
                Rechercher : <input onChange={(e)=>{
                    Rechercher(e.target.value)
                }} />
            </div>
            {VRT.map((t)=>{
                return(
                    <div className="d-inline-block">
                        <img src={t.photo}/><br></br>
                        {t.nom} {t.prenom} <br></br>
                        {t.poste}
                    </div>
                )
            })}
        </div>
    )
}