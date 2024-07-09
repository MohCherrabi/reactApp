import { useState } from "react"
export default function Afficher(props){
    const [lsitCL, setListCL] = useState(props.table);
    const [id, setID] = useState();
    const [name, setName] = useState();
    const [Lastname, setLastName] = useState();
    const [age, setAge] = useState();
    const [H1, setH1] = useState();
    const [H2, setH2] = useState();
    const [en, setEn] = useState(false)
    const Sup = (idS)=>{
        const I = props.table.findIndex((L)=>L.id === idS)
        props.table.splice(I,1)
        setListCL(props.table.filter((L)=> L.id !== idS))
        // console.log("props.table",props.table.length)
        // console.log("lsitCL",lsitCL.length)
    }
    const Engister = ()=>{
        const obj={
            id:id,
            name:name,
            lastname:Lastname,
            age:age,
            hobbies:[H1,H2]
        }
        const I = props.table.findIndex((l)=>l.id ===id)
        props.table.splice(I,1,obj)
        setEn(false);
        setID(0);
    }
    const Modi = (t)=>{
        setID(t.id);
        setEn(true);
        setName(t.name);
        setLastName(t.lastname);
        setAge(t.age)
        setH1(t.hobbies[0])
        setH2(t.hobbies[1])
    }
    return(
        <div>
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>last name</th>
                <th>age</th>
                <th>hobbies</th>
                <th>Action</th>
            </tr>
            {props.table.map((T)=>{
                return <tr>
                    <td>{id === T.id ?  <input disabled value={T.id}/>:T.id }</td>
                    <td>{id === T.id?  <input onChange={(e)=>setName(e.target.value)} value={name}/>:T.name }</td>
                    <td>{id === T.id ?  <input onChange={(e)=>setLastName(e.target.value)} value={Lastname}/>:T.lastname}</td>
                    <td>{id === T.id ?  <input onChange={(e)=>setAge(e.target.value)} value={age}/>:T.age}</td>
                    <td>{id === T.id ?  <input onChange={(e)=>setH1(e.target.value)} value={H1}/>:T.hobbies[0]},
                    {id === T.id ?  <input onChange={(e)=>setH2(e.target.value)} value={H2}/>:T.hobbies[1]}</td>
                    <td><button onClick={()=>Sup(T.id)}>Supprimer</button>
                    {en && id===T.id ?
                        <button onClick={()=>Engister(T)} style={{backgroundColor:'lightgreen'}}>Engistrer</button> :
                        <button onClick={()=>Modi(T)}>Modifier</button>}</td>
                </tr>
            })
            }
        </table>
        nember of element is: {lsitCL.length}
        </div>
    )
}