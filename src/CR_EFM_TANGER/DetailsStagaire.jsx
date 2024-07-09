import {useParams, Link} from 'react-router-dom';
export default function Details(props){
    const {nom} = useParams();
    const Stagaire = props.table.find((t)=>t.nom === nom)
    return <div className='d-inline-block'>
                    <img src={Stagaire.image}/><br></br>
                    Nom : {Stagaire.nom}<br/>
                    Prenom : {Stagaire.prenom}<br/>
                    Filier : {Stagaire.filier}<br/>
                </div>
}