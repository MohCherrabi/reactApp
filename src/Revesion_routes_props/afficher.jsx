import { Link } from "react-router-dom"

export default function Afficher(props){
    return <div>
        <table className="table table-striped table-bordered">
        <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Actions</th>
        </tr>
        {props.table.map((personne)=>{
            return <tr>
                <td>{personne.id}</td>
                <td>{personne.nom}</td>
                <td>{personne.prenom}</td>
                <td><Link to={"/Supprimer/"+personne.id } className="btn btn-danger m-2">Supprimer</Link>  <Link to={"/Modifier/"+personne.id } className="btn btn-success">Modifier</Link></td>
            </tr>
        })}
        </table>
    </div>
}