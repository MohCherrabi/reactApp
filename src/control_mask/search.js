import Fruits  from "./Fruist";
import Vegetables from "./vegtables";
export default function Search(){
    const products = []
    const productSearch =products;
    const inp = document.getElementById('search');
    const nameSearch = document.getElementById('inp');
    const Search = ()=>{
        productSearch = products.filter((pr)=>{
            return pr.name.toLowerCase().search(nameSearch.toLowerCase()) !== -1;
        })
    }
    return (
        <div>
            <center>
                <input id="inp"/><br/>
                <input type="checkbox" id='search' onChange={()=>Search()}/>
                {
                !inp.checked ? 
                    <div>
                    <Fruits product={productSearch}></Fruits><br></br>
                    <Vegetables product={productSearch}></Vegetables>
                    </div>
                :productSearch.map((pr)=>{
                    <p>{pr.name} {pr.price}</p>
                }) 
                }
            </center>
        </div>
    )
}