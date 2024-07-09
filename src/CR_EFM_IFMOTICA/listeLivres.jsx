import { useState } from "react";
export default function ListeLivres(props) {
  const [Stlivres,setStlivres ] = useState(props.table)
  const Supprimer = (idS) => {
    setStlivres([...Stlivres.filter((t) => t.photo !== idS)]);
  };
  console.log("show from listeLivres",Stlivres)
  return (
    <div>
      <h2>Liste des Livres</h2>
      <br></br>
      {Stlivres.map((tb) => {
        return (
          <div className="d-inline-block">
            <img src={tb.photo} />
            <br></br>
            Titre : {tb.Titre} <br></br>
            Auteur : {tb.Auteur}
            <br></br>
            Nomber l'pages : {tb.nbpages}
            <br></br>
            <button
              onClick={() => {
                Supprimer(tb.photo);
              }}
            >
              Supprimer
            </button>
          </div>
        );
      })}
    </div>
  );
}
