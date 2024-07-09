import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
export default function Deatils(){
    const {titre} = useParams();
    const livres = useSelector((lr)=>lr.livres.Ldb)
    const livre = livres.find((lr)=>lr.Titre === titre)
    return(
        <div>
            <img src={livre.photo}/><br></br>
            Titre : {livre.Titre}<br></br>
            Auteur : {livre.Auteur}<br></br>
            Nomber des pages : {livre.nbpages}<br></br>
        </div>
    )
}