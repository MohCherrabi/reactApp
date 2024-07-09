import GroupsS from "./App";
import Acculle from "./Acculle";
import { Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import StoreEtu from "./StoreEtu";
import ListEtudiant from "./AppEtu";
export default function Index() {
  return (
    <div>
      <Link to="/">Accueil</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/App">Groups</Link>
      <Routes>
        <Route
          path="/App"
          element={
            <Provider store={Store}>
              <GroupsS />
            </Provider>
          }
        />
        <Route
          path="/listEtu/:gr"
          element={
            <Provider store={StoreEtu}>
              <ListEtudiant />
            </Provider>
          }
        />
        <Route path="/" element={<Acculle></Acculle>} />
      </Routes>
    </div>
  );
}
