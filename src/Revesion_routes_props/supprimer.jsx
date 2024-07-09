import { useNavigate, useParams } from "react-router-dom";

export default function Supprimer(props){
    const {id} = useParams();
    const navigate = useNavigate();
    const index = props.table.findIndex(personne => personne.id ==id)
    props.table.splice(index,1)
    navigate('/')
}