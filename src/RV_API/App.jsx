import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
export default function RV_API() {
  const [APIEmployee, setAPIEmployee] = useState([]);
  const [VR, setVR] = useState();
  const [Data, setData] = useState({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });
  const Del = (idD) => {
    setAPIEmployee(APIEmployee.filter((po) => po.id !== idD));
  };
  const Add = () => {
    const tabel = APIEmployee;
    setData({ ...Data, id: tabel.length + 2 });
    tabel.push(Data);
    setAPIEmployee(tabel);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setAPIEmployee(res.data);
        setData({ ...Data, id: res.data.length + 1 });
      })
      .catch((err) => console.error(err));
  }, []);
  const Update = (idU) => {
    const obj = APIEmployee.find((emp) => emp.id === idU);
    setData(obj);
  };
  const UpSave = () => {
    const TM = APIEmployee;
    const index = TM.findIndex((em) => em.id === Data.id);
    console.log("index form save ", index);
    TM.splice(index, 1, Data);
    console.log("hello from save update !!", TM);
    console.log(Data);
    setAPIEmployee(TM);
    console.log(APIEmployee);
  };
  const SearchE = (tit) => {
    const TR = APIEmployee.filter(
      (employe) => employe.title.toLowerCase().search(tit.toLowerCase()) !== -1
    );
    setAPIEmployee(TR);
  };
  return (
    <div>
      <input
        placeholder="rechercher par title ..."
        onChange={(e) => setVR(e.target.value)}
      />
      <button onClick={() => SearchE(VR)}>Rechercher</button>
      <div>
        userId:{" "}
        <input
          value={Data.userId}
          onChange={(e) => {
            setData({ ...Data, userId: e.target.value });
          }}
          type="number"
        />
        <br></br>
        title :{" "}
        <input
          value={Data.title}
          onChange={(e) => {
            setData({ ...Data, title: e.target.value });
          }}
          type="text"
        />
        <br></br>
        body :
        <input
          value={Data.body}
          onChange={(e) => {
            setData({ ...Data, body: e.target.value });
          }}
          type="text"
        />
        <br></br>
        <button
          onClick={() => {
            return Add();
          }}
        >
          Ajouter
        </button>
        <button onClick={() => UpSave()}>Enregitstrer</button>
      </div>
      <table>
        <thead>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </thead>
        {APIEmployee.map((et) => {
          return (
            <tr>
              <td>{et.id}</td>
              <td>{et.title}</td>
              <td>{et.body}</td>
              <td>
                <button onClick={() => Del(et.id)}>supprimer</button>
                <button onClick={() => Update(et.id)}>Update</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
