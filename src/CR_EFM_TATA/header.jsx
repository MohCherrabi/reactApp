import { useState } from "react";
import {Route, Routes, Link} from 'react-router-dom';
import Afficher from "./afficher";
import Ajouter from "./ajouter";
import Details from "./details";
export default function Accule(){
    const [tStagaire, setTStagaire] = useState([
        {
            img:'photo1.jpg',
            nom:'Mohamed',
            prenom:'Cherrabi',
            filier:'DOWFS'
        },
        {
            img:'photo2.jpg',
            nom:'Imane',
            prenom:'el azzouzi',
            filier:'DOWFS'
        },
        {
            img:'photo3.jpg',
            nom:'Mahdi',
            prenom:'ddddd',
            filier:'DOM'
        },
        {
            img:'photo4.jpg',
            nom:'ccccc',
            prenom:'xxxxx',
            filier:'DOM'
        }
    ])
    return (
        <div>
            <ul className="navbar p-8 bg-black">
                <li>
                    <Link to='/'>Accule</Link>
                    
                </li>
                <li>
                <Link to='/Ajouter'>Ajouter</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Afficher table={tStagaire}/>}/>
                <Route path="/Ajouter" element={<Ajouter table={tStagaire}/>}/>
                <Route path="/details/:nom" element={<Details table={tStagaire}/>}/>
            </Routes>
        </div>
    )
}