import {Link} from 'react-router-dom';
export default function AfficherStagaires(props){
    return(
        <div>
            {props.table.map((t)=>{
                return <div className='d-inline-block'>
                    <img src={t.image}/><br></br>
                    Nom : {t.nom}<br/>
                    Prenom : {t.prenom}<br/>
                    Filier : {t.filier}<br/>
                    <Link to={'/Details/'+t.nom}>
                        Details
                    </Link>
                </div>
            })}
        </div>
    )
}