import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Afficher(){
const Livres = useSelector((et)=>et.livres.Ldb)
    return(
        <div>
            {Livres.map((et)=>{
                return <div className="d-inline-block">
                    <img src={et.photo}/><br/>
                    Titre : {et.Titre}<br/>
                    Nomber de pages : {et.nbpages}<br/>
                    Auteur : {et.Auteur}
                    <Link to={"/details/"+et.Titre}>
                        Details
                    </Link>
                </div>
            })}
        </div>
    )
}