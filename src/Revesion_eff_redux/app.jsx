import { useDispatch, useSelector } from "react-redux";
import { Add,Supprimer,Enregister } from "./personneSlice";
import { useState } from "react";
export default function App(){

    const personnes = useSelector((state)=>state.personnes.data);
    const [data,setData] = useState({
        id:'',
        nom:'',
        prenom:''
    })
    const dispatch = useDispatch(); 
    const Modifier = (idM)=>{
        const obj = personnes.find((per)=>per.id == idM)
        setData(obj);
    }
    return <>
        <div>
            
            <table>
                <tr>
                    <td>ID</td>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Action</td>
                </tr>
                {
                    personnes.map((personne)=>{
                        return <tr>
                            <td>{personne.id}</td>
                            <td>{personne.nom}</td>
                            <td>{personne.prenom}</td>
                            <td><button onClick={()=>{
                                dispatch(Supprimer(personne.id))
                            }} >Supprimer</button><button onClick={()=>{
                                Modifier(personne.id)
                            }}>Modifier</button></td>
                        </tr>
                    })
                }
            </table>
        </div>
        <div>
            id : <input type="number" value={data.id} onChange={(e)=>setData({...data,id:e.target.value})} id="" /><br></br>
            Nom : <input type="text" value={data.nom} onChange={(e)=>setData({...data,nom:e.target.value})} id="" /><br></br>
            Prenom : <input type="text"  value={data.prenom}onChange={(e)=>setData({...data,prenom:e.target.value})} id="" /><br></br>
            <button onClick={()=>{
                dispatch(Add(data))
                setData({
                    id:'',
                    nom:'',
                    prenom:''
                })
            }}>
                Ajouter 
            </button>
            <button onClick={()=>{
                dispatch(Enregister(data))
                setData({
                    id:'',
                    nom:'',
                    prenom:''
                })
            }}>
                Enregister
            </button>
        </div>
    </>
}