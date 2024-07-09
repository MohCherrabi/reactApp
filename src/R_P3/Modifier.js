import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Modifier(){
    const {id}= useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
        async function funFetcheData(){
        await axios.get('http://localhost:3035/LisetClient/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        setNAME(data.name)
        console.log("from useEffect:",data.name)
        setLNAME(data.lastname)
        setAGE(data.age)
        setH1('kkkkkk')
        setH2('knjkjsa')
        // setH1(data.hobbies[0])
        // setH2(data.hobbies[1])
        }
        funFetcheData();
    },[])
    const [NAME, setNAME]=useState();
    const [LNAME, setLNAME]=useState();
    const [AGE, setAGE]=useState();
    const [HOBBIES, setHOBBIES]=useState([]);
    const [H1, setH1]=useState();
    const [H2, setH2]=useState();
    const navigat = useNavigate();
    console.log("name: ",NAME)
        const obj = {
            id:id,
            name:NAME,
            lastname:LNAME,
            age:AGE,
            hobbies:HOBBIES
        };
        const Engistrer =(e)=>{
            e.prenventDefault();
            axios.put("http://localhost:3035/LisetClient/"+id,obj)
          .then(res => {
            alert("la modification determiner merci !!")
            navigat('/');
          })
        }
    return <div>
        {console.log('nom: ',data.name)}
    name: <input value={NAME} onChange={(e)=>setNAME(e.target.value)}/><br/>
    last name: <input value={LNAME} onChange={(e)=>setLNAME(e.target.value)}/><br/>
    age: <input value={AGE}  type="number" onChange={(e)=>setAGE(e.target.value)}/><br/>
    hobbies 1: <input value={H1} onChange={(e)=>setH2(e.target.value)}/>hobbies 2:<input value={H2} onChange={(e)=>setH1(e.target.value)}/>
    <button onClick={()=>{
        const H = [...HOBBIES]
        H.push(H1,H2)
        setHOBBIES(H)
    }}>Ajouter Hobbies</button><br></br>
    <button onClick={()=>Engistrer()}>Engistrer</button>
</div>
}