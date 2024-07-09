import Login from './login';
import Sign_up from './Sign_up';
import Show from './Show';
import AddElement from './Add_element';
import AddItem from './Add_item';
import Deconnexion from './Deconnxion';
import DeleteElement from './Delete_element';
import DeleteItem from './Delete_Item';
import UpdateItem from './Update_Item';
import UpdateElement from './Update_element';

import {Link, Route, Routes} from 'react-router-dom';
export default function Index(){
    return(
        <div>
            <Link to='/'></Link>
            <ul>
                <Link to='/Show.jsx'>Home</Link>
                <Link to='/Deconnexion.jsx'>Log out</Link>
                <Link to='/AddElement.jsx'>Add Element</Link>
            </ul>
            <Routes>
                <Route path="/" element={<Login></Login>}/>
                <Route path="/Sign_up" element={<Sign_up></Sign_up>}/>
                <Route path="/Show" element={<Show></Show>}/>
                <Route path="/Add_element" element={<AddElement></AddElement>}/>
                <Route path="/Add_item" element={<AddItem></AddItem>}/>
                <Route path="/Deconnexion" element={<Deconnexion></Deconnexion>}/>
                <Route path="/Delete_element" element={<DeleteElement></DeleteElement>}/>
                <Route path="/Delete_item" element={<DeleteItem></DeleteItem>}/>
                <Route path="/Update_item" element={<UpdateItem></UpdateItem>}/>
                <Route path="/Update_element" element={<UpdateElement></UpdateElement>}/>
            </Routes>
        </div>
    )
}