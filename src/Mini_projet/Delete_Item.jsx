import { useNavigate } from 'react-router-dom';
import  axios from 'axios';
export default function DeleteItem(){
        axios.delete("http://localhost:3032/DATA_SHOP")
}