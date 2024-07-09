import {  useEffect } from "react";
import {useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
export default function Supprimer(){
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        axios.delete(`http://localhost:3032/Articles/${id}`)
       .then(response=>{
             navigate('/Acculle')
         })
    })
}