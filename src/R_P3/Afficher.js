import axios from "axios";
import { useEffect, useState } from "react"
import { Link} from "react-router-dom";
export default function Afficher(){
    const [lsitCL, setListCL] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3035/LisetClient")
        .then(res => {
            setListCL(res.data)
        })
    })
    return(
        <div className="container mt-5">
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>last name</th>
                    <th>age</th>
                    <th>hobbies</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {lsitCL.map((T)=>{
                return <tr>
                    <td>{T.id}</td>
                    <td>{T.name}</td>
                    <td>{T.lastname}</td>
                    <td>{T.age}</td>
                    <td>{T.hobbies[0]},
                    {T.hobbies[1]}</td>
                    <td><button className="btn btn-sm btn-primary">Supprimer</button>
                        <Link className="btn btn-sm ms-1 btn-success" to={`/Modifier/${T.id}`}>modifier</Link></td>
                </tr>
            })
            }
            </tbody>
        </table>
        number of element is: {lsitCL.length}
        </div>
    )
}