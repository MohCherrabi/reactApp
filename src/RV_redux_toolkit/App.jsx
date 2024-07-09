import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const db = useSelector((st) => st.clients.db);
  const [tbC, settbC] = useState({ id: 0, name: null, age: 0 });
  console.log('jnjbbj',db)
  return (
    <div>
      <div>
        name:
        <input
          onChange={(e) => {
            settbC({ ...tbC, name: e.target.value });
          }}
        />
        <br></br>
        age :
        <input
          onChange={(e) => {
            settbC({ ...tbC, age: e.target.value });
          }}
        />
        <br></br>
        <button>Ajouter</button>
      </div>
      {db.map((cl)=>{
        return <p>
            name : {cl.name} age: {cl.age}
        </p>
      })}
    </div>
  );

}
