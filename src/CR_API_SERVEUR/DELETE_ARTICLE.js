import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
export default function DELETE_ARTICLE(){
    const {id} = useParams();
    const navigat = useNavigate();
    const conf=window.confirm('vous voulez vriament supprimer cet article ? ')
    conf?
    axios.delete(`http://localhost:3031/Articles/${id}`)
    .then(res => {
        alert('la supprission sucess !!!')
        navigat('/')
    })
    .catch(err =>{
        alert('la supprission ne pas determine !!')
    }):alert('refusser la supprission')
}