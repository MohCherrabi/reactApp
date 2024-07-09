import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function ModifierElem(props){
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        id:'',
        nom:'',
        prenom:''
    })
    useEffect(()=>{
        setData(props.table.find(personne=>personne.id ==id))
    },[]) 
    const Modifier = ()=>{
        const index = props.table.findIndex(personne => personne.id ==id );
        props.table.splice(index,1,data);
        setData({
            id:'',
            nom:'',
            prenom:''
        })
        navigate('/')
    }
    return <div>
        Id : <input type="text" value={data.id} onChange={(e)=>setData({...data,id:e.target.value})} /><br></br>
        Nom : <input type="text" value={data.nom}  onChange={(e)=>setData({...data,nom:e.target.value})} /><br></br>
        Prenom : <input type="text" value={data.prenom}  onChange={(e)=>setData({...data,prenom:e.target.value})} /><br></br>
        <button className="btn btn-primary" onClick={()=>{
            Modifier();
        }}>
            Modifier
        </button>
    </div>
}