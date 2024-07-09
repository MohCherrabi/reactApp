import { Link, Route, Routes } from "react-router-dom";
import Afficher from "./Afficher";
import Rechercher from "./Recherche";
import Ajouter from "./Ajouter";
export default function AppRouter(){
    const data = [
        { id: 1, name: "John", lastname: "Doe", age: 30, hobbies: ["Reading", "Hiking"],src:"photo1.jpg",sport:"footBall" },
        { id: 2, name: "Jane", lastname: "Smith", age: 25, hobbies: ["Swimming", "Painting"],src:"photo1.jpg",sport:"footBall" },
        { id: 3, name: "Bob", lastname: "Johnson", age: 35, hobbies: ["Cooking", "Gaming"] ,src:"photo1.jpg",sport:"footBall"},
        { id: 4, name: "Alice", lastname: "Wilson", age: 28, hobbies: ["Traveling", "Photography"],src:"photo1.jpg",sport:"footBall" },
        { id: 5, name: "Mike", lastname: "Brown", age: 32, hobbies: ["Cycling", "Music"],src:"photo1.jpg",sport:"footBall" },
        { id: 6, name: "Sarah", lastname: "Lee", age: 27, hobbies: ["Dancing", "Singing"],src:"photo1.jpg",sport:"footBall" },
        { id: 7, name: "David", lastname: "Taylor", age: 40, hobbies: ["Fishing", "Gardening"],src:"photo1.jpg",sport:"footBall" },
        { id: 8, name: "Emily", lastname: "Davis", age: 22, hobbies: ["Yoga", "Cooking"],src:"photo1.jpg",sport:"footBall" },
        { id: 9, name: "Tom", lastname: "White", age: 29, hobbies: ["Painting", "Hiking"],src:"photo1.jpg",sport:"footBall" },
        { id: 10, name: "Linda", lastname: "Miller", age: 33, hobbies: ["Reading", "Gaming"],src:"photo1.jpg",sport:"footBall" }
      ];
    return(
        <div>
            <ul>
                <li><Link to='/afficher'>Afficher</Link></li>
                <li><Link to='/Recherche'>Recherche</Link></li>
                <li><Link to='/Ajouter'>Ajouter</Link></li>
            </ul>
            <Routes>
                <Route path="/afficher" element={<Afficher table={data}/>}/>
                <Route path="/Recherche" element={<Rechercher table={data}/>}/>
                <Route path="/Ajouter" element={<Ajouter table={data}/>}/>
            </Routes>
        </div>
    )
    
}