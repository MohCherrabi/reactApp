import { useSelector } from "react-redux";
import Header from "./Header";
import { useState } from "react";

export default function App() {
  const TableIni = useSelector((data) => data.Bibliotheque.lives);
  const [intT, setInitT] = useState(TableIni);
  const [genres, setGenres] = useState([]);
  const [Tpanier, setTpanier] = useState([]);
  const [Total, setTotal] = useState(0);
  const OPT = () => {
    TableIni.map((tb) => {
      if (!genres.find((tbt) => tbt == tb.Genre)) {
        const ti = genres;
        ti.push(tb.Genre);
        setGenres(ti);
      }
    });
  };
  OPT();
//   const Total = ()=>{
//     return Tpanier.map((tp)=>{
//         const prix = 0;
//         prix += tp.Prix;
//         return prix
//     })
//   }
  return (
    <div>
      <Header></Header>
      <select
        onChange={(e) => {
          setInitT(TableIni.filter((el) => el.Genre == e.target.value));
        }}
      >
        <option>choisir un genres</option>
        {genres.map((t) => {
          return <option>{t}</option>;
        })}
      </select>
      <table>
        <tr>
          <th>ISBN</th>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Prix</th>
          <th>Genre</th>
        </tr>
        {intT.map((tb) => {
          return (
            <tr>
              <td>{tb.ISBN}</td>
              <td>{tb.Titre}</td>
              <td>{tb.Auteur}</td>
              <td>{tb.Prix}</td>
              <td>{tb.Genre}</td>
              <td>
                <button
                  onClick={() => {
                    setTpanier([...Tpanier, tb]);
                    setTotal(Total+tb.Prix)
                  }}
                >
                  Ajouter au banier
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <h1>Panier</h1>
      <ul>
        {Tpanier.map((tp) => {
          return (
            <li>
              {tp.Titre} {tp.Prix} <button onClick={()=>{
                setTpanier([...Tpanier.filter((t)=>t.ISBN !== tp.ISBN)])
                setTotal(Total - tp.Prix)
              }}>
                Supprimer</button>
            </li>
            
          );
        })}
      </ul>
      total : {Total}
    </div>
  );
}
