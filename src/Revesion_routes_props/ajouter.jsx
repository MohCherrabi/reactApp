import { useState } from "react"

export default function Ajouter(props){
    const [data, setData] = useState({
        id:'',
        nom:'',
        prenom:''
    })

    return <div>
        Id : <input type="text" onChange={(e)=>setData({...data,id:e.target.value})} /><br></br>
        Nom : <input type="text" onChange={(e)=>setData({...data,nom:e.target.value})} /><br></br>
        Preom : <input type="text" onChange={(e)=>setData({...data,prenom:e.target.value})} /><br></br>
        <button className="btn btn-primary" onClick={()=>{
            props.table.push(data)
        }}>
            Ajouter
        </button>
    </div>
}