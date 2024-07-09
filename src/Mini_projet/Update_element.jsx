import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  axios from 'axios';
export default function UpdateElement(){
    const [Data, setData] = useState();
    useEffect(
        ()=>{
            axios.delete("http://localhost:3032/DATA_SHOP")
            .then(response =>setData(response.data))
        }
    ,[])

    return(
        <div>
            
        </div>
    )
}