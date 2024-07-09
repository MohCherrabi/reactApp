import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App(){
    const data = useSelector(data=>data.data);
    const [DataCL, setDataCL] = useState({id:0,nom:'', prenom:'',age:0,genre:'Male'});
    const dispatch = useDispatch();
    return (
        <div>
            <center>
                nom : <input onChange={(e)=>setDataCL({...DataCL,nom:e.target.value})} ></input><br></br>
                prenom : <input onChange={(e)=>setDataCL({...DataCL,prenom:e.target.value})}  ></input><br></br>
                age : <input type="number" onChange={(e)=>setDataCL({...DataCL,age:e.target.value})}  ></input><br></br>
                genre : <br>
                </br>Male: <input type="radio" name="sexe" onChange={()=>setDataCL({...DataCL,genre:"Male"})} ></input> Femle: <input type="radio"  name="sexe" onChange={()=>setDataCL({...DataCL,genre:"Femle"})} ></input><br></br>
                <button onClick={()=>{
                    return dispatch(
                        {type:"ADD",payload:DataCL}
                    )
                }}>Ajouter</button>
            </center>
            {data.map((cl)=>{
                return (
                    <div>
                        <fieldset>
                        nom: {cl.nom}<br></br>
                        prenom: {cl.prenom}<br></br>
                        age: {cl.age}<br></br>
                        genre: {cl.genre}<br></br>
                        <button onClick={()=>{
                            return dispatch(
                                {type:'DELETE',
                                payload:cl.id}
                            )
                        }}>Supprimer</button>
                        </fieldset>

                    </div>
                )
            })}
        </div>
    )
}