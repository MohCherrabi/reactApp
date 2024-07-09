import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  axios from 'axios';
export default function Login(){
    const [Data, setData] = useState();



    useEffect(
        ()=>{
            axios.get("http://localhost:3032/USERS")
            .then(response =>setData(response.data))
        }
    ,[])

    return(
        <div>
            
        </div>
    )
}