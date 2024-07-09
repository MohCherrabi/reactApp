import { Link } from "react-router-dom"
export default function Afficher(props){
    return (
        <div>
            <table>
                <tr>
                    <th>
                        prenom
                    </th>
                    <th>
                        marie
                    </th>
                    <th>
                        age
                    </th>
                </tr>
            {props.table.map((pr)=>{
                return <tr>
                    <td>{pr.prenom}</td>
                    <td>{pr.marie?'true':'false'}</td>
                    <td>{pr.age}</td>
                    <td>
                    <Link to={`/Supprimer/${pr.id}`}>Supprimer</Link>
                |
                    <Link  to={`/Modifier/${pr.id}`}>Modifier</Link>
                </td>
                </tr>
            })}
            </table>
        </div>
    )
}