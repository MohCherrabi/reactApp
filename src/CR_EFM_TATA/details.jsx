import { useParams } from "react-router-dom";
export default function Details(props){
    const {nom} = useParams()
    const objS = props.table.find((t)=>t.nom === nom)
    return(
        <div>
            <img src={objS.img}/><br></br>
            Nom : {objS.nom}<br></br>
            Prenom : {objS.prenom}<br></br>
            filier : {objS.filier}<br></br>
        </div>
    )
}