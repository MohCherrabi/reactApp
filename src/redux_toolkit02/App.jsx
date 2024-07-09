import { useDispatch, useSelector } from "react-redux";
import { AddGroup, DeleteGroupe,UpdateGroup } from "./Groups";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function GroupsS() {
  const GT = useSelector((st) => st.groups.db);
  const dispatch = useDispatch();
  const [GroupAjouter, setGroupAjouter] = useState({ id: 0, nom: "" });
  return (
    <div>
      <div>
        id: <input  id="id" onChange={(e)=>setGroupAjouter({...GroupAjouter,id:e.target.value})}/>
        <br></br>
        <input
          onChange={(e) => {
             setGroupAjouter({ ...GroupAjouter, nom: e.target.value });
          }}
        />
        <button
          onClick={() => {
            return dispatch(AddGroup(GroupAjouter));
          }}
        >
          ajouter
        </button>
        <button
          onClick={() => {
            return dispatch(UpdateGroup(GroupAjouter));
          }}
        >
          modifier
        </button>
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Nom</th>
        </tr>
        {GT.map((gt) => {
          return (
            <tr>
              <td>{gt.id}</td>
              <td>{gt.nom}</td>
              <td>
                <button onClick={() => dispatch(DeleteGroupe(gt.id))}>
                  Delete
                </button>
              </td>
              <td><Link to={`/listEtu/${gt.nom}`}>List Etudiant</Link></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
