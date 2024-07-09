import { useState } from "react";
export default function Ajouter(props) {
  const [values, setValues] = useState({
    nom: "",
    prenom: "",
    Ville: "",
    Fil: "",
    photo: "",
  });
  const AjouteS = ()=>{
    props.setTable([...props.table,values])
  }
  return (
    <div>
      Nom :
      <input
        onChange={(e) => {
          setValues({ ...values, nom: e.target.value });
        }}
      /><br/>
      Prenom :
      <input
        onChange={(e) => {
          setValues({ ...values, prenom: e.target.value });
        }}
      /><br/>
      Ville :
      <select
        onChange={(e) => {
          setValues({ ...values, Ville: e.target.value });
        }}
      >
        <option>fes</option>
        <option>casa</option>
        <option>Rabat</option>
      </select><br/>
      Photo :
      <input
        type="file"
        onChange={(e) => {
          setValues({ ...values, nom: e.target.files[0].name });
        }}
      /><br/>
      <button
      onClick={()=>{
        AjouteS()
      }}
      >Ajouter Stagiare</button><br/>
    </div>
  );
}
