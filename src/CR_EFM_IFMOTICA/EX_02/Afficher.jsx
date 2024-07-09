import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Supprimer } from "./sliceLivres";
export default function Afficher(){
    const dispatch = useDispatch();
    const StaTable = useSelector((tb)=>{
        return tb.livres.db
    })
    return(
        <div>
            <h4>Liste livres</h4>
            <table>
                <tr>
                    <th>id</th>
                    <th>Titer</th>
                    <th>Nombres Pages</th>
                    <th>Action </th>
                </tr>
            {StaTable.map((tb)=>{
                return<tr>
                    <td>{tb.Id}</td>
                    <td>{tb.Titre}</td>
                    <td>{tb.NombresPages}</td>
                    <td><button
                    onClick={()=>{
                        dispatch(Supprimer(tb.Id))
                    }}
                    >
                        Sipprimer
                        </button></td> 
                </tr>
            })}
            </table>
        </div>
    )
}