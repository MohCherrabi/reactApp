import { useState } from "react"

export default function Ajouter(props){
    const [NAME, setNAME]=useState()
    const [LNAME, setLNAME]=useState()
    const [AGE, setAGE]=useState()
    const [HOBBIES, setHOBBIES]=useState([])
    const [H1, setH1]=useState()
    const [H2, setH2]=useState()
    const Ajouter =()=>{
        const obj = {
            id:props.table[props.table.length -1].id +1,
            name:NAME,
            lastname:LNAME,
            age:AGE,
            hobbies:HOBBIES
        }
        props.table.push(obj)
    }
    return(
        <div>
            name: <input onChange={(e)=>setNAME(e.target.value)}/><br/>
            last name: <input onChange={(e)=>setLNAME(e.target.value)}/><br/>
            age: <input type="number" onChange={(e)=>setAGE(e.target.value)}/><br/>
            hobbies 1: <input onChange={(e)=>setH2(e.target.value)}/>hobbies 2:<input onChange={(e)=>setH1(e.target.value)}/>
            <button onClick={()=>{
                const H = [...HOBBIES]
                H.push(H1,H2)
                setHOBBIES(H)
            }}>Ajouter Hobbies</button><br></br>
            <button onClick={()=>Ajouter()}>Ajouter</button>
        </div>
    )
}