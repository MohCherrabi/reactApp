import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
export default function ListEtudiant() {
    const {gr} = useParams();
    console.log(gr)
  const Etus = useSelector((st) => st.etudiants.dbEtudiant.filter((et)=>et.nomg === gr));
  console.log(Etus)
  return (
    <div>
        <h1>List Etudiant tout les groupes</h1>
      <table>
        <tr>
          <th>id</th>
          <th>nomG</th>
          <th>Nom</th>
          <th>Moy Gn</th>
        </tr>
        {Etus.map((et) => {
          return (
            <tr>
              <td>{et.id}</td>
              <td>{et.nomg}</td>
              <td>{et.Nom}</td>
              <td>{et.moyG}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
