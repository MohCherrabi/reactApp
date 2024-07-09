import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default  function ARTICLE(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3031/Articles")
        .then(res => {
        console.log("from useEffct ",res.data)
        console.log(setData(res.data))
    })
    .catch(error=>{
        console.error("erreur de importation de la api : ",error);
    })
    console.log("from before return : ",data)
    },[])
    return(
       <>{console.log("from map ",data)}
        <table> 
            <tr>
                <th>Id</th>
                <th>nomA</th>
                <th>pu</th>
                <th>Qte</th>
                <th>Action</th>
            </tr>
            {data.map((D)=>{
                return(
                    <tr>
                        <td>{D.id}</td>
                        <td>{D.nomA}</td>
                        <td>{D.pu}</td>
                        <td>{D.Qt}</td>
                        <td><Link style={{marginRight:'20px'}} to={`/DELETE_ARTICLE/${D.id}`}>Supprimer</Link>
                        <Link to={`/UPDATE_ARTICLE/${D.id}`}>UPDATE</Link></td>
                    </tr>
                )
            })}
        </table>
        </>
    )
}