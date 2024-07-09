import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const etaIniail = useSelector((tb) => tb.stagaires.dbEtudiant);

  return (
    <div>
      <table>
        <tr>
          <td>Id</td>
          <td>Nom</td>
          <td>Filière</td>
          <td>Action</td>
        </tr>
        {etaIniail.map((tb) => {
          return (
            <tr>
              <td>{tb.Id}</td>
              <td>{tb.Nom}</td>
              <td>{tb.Filière}</td>
              <td>
                <button>Supprimer</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
