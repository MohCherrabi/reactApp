import { useState } from "react";
export default function Rechercher(props) {
  const [TR, setTR] = useState(props.table);
  const Rech = (el) => {
    if (el.length !== 0) {
      setTR(
        TR.filter(
          (tb) => tb.Titre.toLowerCase().search(el.toLowerCase()) !== -1
        )
      );
    }else{
        setTR(props.table)
    }
  };
  return (
    <div>
      Rechercher : 
      <input
        type="text"
        onChange={(e) => {
          Rech(e.target.value);
        }}
      />
      <br></br>
      {TR.map((tb) => {
        return (
          <div className="d-inline-block">
            <img src={tb.photo} />
            <br></br>
            Titre : {tb.Titre} <br></br>
            Auteur : {tb.Auteur}
            <br></br>
            Nomber l'ages : {tb.nbpages}
            <br></br>
            <button>Supprimer</button>
          </div>
        );
      })}
    </div>
  );
}
