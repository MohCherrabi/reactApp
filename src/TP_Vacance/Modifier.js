import { useState, useEffect } from "react";
import {useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
export default function Modifier(){
    const naviagte = useNavigate();
    const {id} = useParams();
    const [values, setValues] = useState({nomA:'',pu:'',Qt:'',id:id});
    useEffect(()=>{
        axios.get(`http://localhost:3032/Articles/${id}`)
        .then(response=>{
            setValues(response.data)
        console.log(response.data)
        } )
        .catch(error=> console.log(error))
    },[])
    const Mod = ()=>{
            axios.put("http://localhost:3032/Articles/"+id,values)
            naviagte('/Acculle');
    }
    return(
        <div className="container mt-4">
      <h3>Ajouter un Article</h3>
      <form>
        <div className="form-group">
          <label htmlFor="nomArticle">Nom Article :</label>
          <input
            type="text"
            className="form-control"
            id="nomArticle"
            value={values.nomA}
            onChange={(e) => {
              setValues({ ...values, nomA: e.target.value });
              console.log(values);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prix">Prix :</label>
          <input
          value={values.pu}
            type="number"
            className="form-control"
            id="prix"
            onChange={(e) => {
              setValues({ ...values, pu: e.target.value });
              console.log(values);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qte">Qte :</label>
          <input
          value={values.Qt}
            type="number"
            className="form-control"
            id="qte"
            onChange={(e) => {
              setValues({ ...values, Qt: e.target.value });
              console.log(values);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={() => Mod()}>
          Enregistrer
        </button>
      </form>
    </div>
    )
}