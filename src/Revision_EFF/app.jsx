import { useState } from "react"

export default function RevisonF(){

    const [tableT, setTbale] = useState([]);
    const [editE ,setEditE] = useState(false);
    const [data, setData] = useState({
        id:0,
        nom:'',
        prenom:'',
        age:0
    })
    const Ajouter = (Data)=>{
        const TD = [...tableT,Data]
        setTbale(TD)
    }
    const edit = (id) =>{
        setData(tableT.find((t)=>t.id == id));
        setEditE(true)
    }

    const Supprimer = (idS) =>{
        const TD = tableT.filter(td=> td.id !== idS)
        setTbale(TD);
    }
    const Modifier = (idM,Data)=>{
        const TDindex = tableT.findIndex(td=>td.id === idM)
        const TD = tableT
        setTbale(TD.splice(TDindex,1,Data));
        setEditE(false)
    }
    return<>
        <div>
            Form d'ajouter 
            ID : <input type="number" value={data.id}  onChange={(e)=>setData({...data,id:e.target.value})}/> <br />
            Nom : <input type="text"  value={data.nom} onChange={(e)=>setData({...data,nom:e.target.value})}/> <br />
            Prenom : <input type="text" value={data.prenom}  onChange={(e)=>setData({...data,prenom:e.target.value})}/> <br />
            Age : <input type="text"  value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/> <br />
    {editE?<button onClick={()=>{
                    return Modifier(data.id,data);
                }}>Modifier</button> 
                 :<button onClick={()=>{
                    return Ajouter(data);
                }}>Ajouter</button> }
        </div>
        
                {tableT.map((td, Index) =>{
                    return (
                        <div key={Index}>
                            Id : {td.id} Nom : {td.nom} Prenom: {td.prenom} Age: {td.age}
                            <button onClick={()=>Supprimer(td.id)}>Supprimer</button>
                            <button onClick={()=>edit(td.id)} >Modifier</button>
                        </div>
                    )
                })}
            
        </>
    
}