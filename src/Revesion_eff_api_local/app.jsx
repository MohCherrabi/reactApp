import axios from "axios";
import { useEffect, useState } from "react";

export default function App(){
    const [personnes, setPersonne] = useState([])
    const [editE ,setEditE] = useState(false)
    const [data,setData] = useState({
        id:0,
        nom:'',
        prenom:''
    })
    useEffect(()=>{
        axios
      .get("http://localhost:3030/personnes")
      .then((res) => {
        setPersonne(res.data);
      })
      .catch((err) => console.error(err));
    },[personnes])
    const Ajouter = ()=>{
        axios.post("http://localhost:3030/personnes",data)
        .then((res) => {
            return res.data
        }).catch((err) => console.error(err));
        setData({
            id:0,
            nom:'',
            prenom:''
        }) 
    }
    const Supprimer= (idS)=>{
        const con = window.confirm('voulez vous supprimer cette element en cours ')
        if(con){
            axios.delete("http://localhost:3030/personnes/"+idS)
            .then((res) => {
                return res.data
            }).catch((err) => console.error(err));
        }
    }

    const Modifier= (idS)=>{
            axios.get("http://localhost:3030/personnes/"+idS)
            .then((res) => {
                setData(res.data); 
            }).catch((err) => console.error(err));
            setEditE(true)
    }
    const Edite = ()=>{
        axios.put('http://localhost:3030/personnes/'+data.id,data)
        .then((res)=>{
            return res.data
        }).catch(err=>{
            console.log(err)
        })
        setEditE(false)
        setData({
            id:0,
            nom:'',
            prenom:''
        })

    }
    return(
        <>
        <table>
            <th>id</th>
            <th>nom</th>
            <th>prenom</th>
        {personnes.map(per=>{
            return <tr>
                <td>{per.id}</td>
                <td>{per.nom}</td>
                <td>{per.prenom}</td>
                <td><button onClick={()=>Supprimer(per.id)}>Supprimer</button></td>
                <td><button onClick={()=>Modifier(per.id)}>Modifier</button></td>
            </tr>
        })}
        </table>
        <div>
            Form d'ajouter 
            ID : <input type="number" value={data.id}  onChange={(e)=>setData({...data,id:e.target.value})}/> <br />
            Nom : <input type="text"  value={data.nom} onChange={(e)=>setData({...data,nom:e.target.value})}/> <br />
            Prenom : <input type="text" value={data.prenom}  onChange={(e)=>setData({...data,prenom:e.target.value})}/> <br />
    {editE?<button onClick={()=>{
                    return Edite();
                }}>Modifier</button> 
                 :<button onClick={()=>{
                    return Ajouter();
                }}>Ajouter</button> }
        </div>
        </>
    )
}