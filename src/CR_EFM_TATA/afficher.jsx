import { Link } from "react-router-dom";
export default function Afficher(props){


    return(
        <div>
            {props.table.map((el)=>{
                return(
                    <div>
                        <img src={el.img}/><br></br>
                        Nom : {el.nom}<br/>
                        Prenom : {el.prenom}
                        <Link to={'/details/'+el.nom}>Details</Link>
                    </div>
                )
            })}
        </div>
    )
}
