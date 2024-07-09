import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AJOUTER_ART(){
    const navigate = useNavigate();
    const [values, setValues] = useState({id:0,nomA:'',pu:0,Qt:0})
    useEffect(()=>{
        axios.get("http://localhost:3032/Articles")
        .then(res => {
        setValues({...values,id:res.data[res.data.length-1].id+1})})
    },[])
    const Ajouter = ()=>{
            axios.post("http://localhost:3032/Articles",values)
            .then((res)=>{ alert('bien ajouter')
           }).catch(err=>alert('erreur ajout'))
            navigate('/Acculle')
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
            onChange={(e) => {
              setValues({ ...values, nomA: e.target.value });
              console.log(values);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prix">Prix :</label>
          <input
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
            type="number"
            className="form-control"
            id="qte"
            onChange={(e) => {
              setValues({ ...values, Qt: e.target.value });
              console.log(values);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={() => Ajouter()}>
          Ajouter
        </button>
      </form>
    </div>
    )
}