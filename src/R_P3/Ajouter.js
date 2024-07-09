import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Ajouter(){
    const [list, setList] = useState([])
    const [NAME, setNAME]=useState()
    const [LNAME, setLNAME]=useState()
    const [AGE, setAGE]=useState()
    const [HOBBIES, setHOBBIES]=useState([])
    const [H1, setH1]=useState()
    const [H2, setH2]=useState()
    const navigat = useNavigate();
    useEffect(
        ()=>{
            fetch("http://localhost:3035/LisetClient")
            .then(res=>res.json())
            .then(response=>setList(response))
        }
    ,[list])
    const Ajouter = async () => {
        const obj = {
            id:list[list.length -1].id +1,
            name:NAME,
            lastname:LNAME,
            age:AGE,
            hobbies:HOBBIES
        };
          await axios.post("http://localhost:3035/LisetClient",obj)
          .then(res => {
            alert("la joute determiner merci !!")
            navigat('/Afficher');
          })
        
      };
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