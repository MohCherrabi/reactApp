import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
export default function Acculle(){
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const login = localStorage.getItem('login');
    const key = localStorage.getItem('key');
    console.log(login)
    console.log(key)
    if(key == null || key == undefined) {
        navigate("/");
    }
    useEffect(()=>{
        axios.get("http://localhost:3032/Articles")
        .then(res => {
            setData(res.data)
        console.log("from useEffect ",res.data)
    })
    .catch(error=>{
        console.error("erreur de importation de la api : ",error);
    })
    console.log("from before return : ",data)
    },[])

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/Acculle'>Acculle</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/Ajouter'>Ajouter Article</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to ='/Deconnexion'>Deconnexion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Rechercher'>Rechercher</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <div className="container mt-4">
                <table className="table table-bordered">
                    <thead>
                        <th>
                            Id
                        </th>
                        <th>
                            Nom Article
                        </th>
                        <th>
                            Prix
                        </th>
                        <th>
                            Qte en stock
                        </th>
                        <th>
                            Action
                        </th>
                    </thead>
                    <tbody>
                        {data.map((it)=>{
                            return(
                                <tr>
                                    
                                    <td>
                                        {it.id}
                                    </td>
                                    <td>
                                        {it.nomA}
                                    </td>
                                    <td>
                                        {it.pu}
                                    </td>
                                    <td>
                                        {it.Qt}
                                    </td>
                                    <td>
                                        <Link className="btn btn-success" to={`/modifier/${it.id}`}>Modifier</Link>
                                        <Link className="btn btn-danger" to={`/Supprimer/${it.id}`}>Supprimer</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}