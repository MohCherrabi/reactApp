import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProduct, deleteProduct } from "./Products";

export default function App() {
  const products = useSelector((st) => st.products.db);

  const [pId, setPId] = useState();
  const [nameP, setNameP] = useState();
  const [price, setPrice] = useState();
  const [src, setSrc] = useState(); 
  const [idProduct, setIdProduct] = useState(products.length);
  const dispatch = useDispatch();
  console.log(idProduct)
  return (
    <>
      <div>
        Name : <input onChange={(e)=>{
            return setNameP(e.target.value)
        }}/><br></br>
        Price : <input onChange={(e)=>{
            return setPrice(e.target.value)
        }}/><br></br>
        Src photo : <input onChange={(e)=>{
            return setSrc(e.target.value)
        }}/><br></br>
        <button onClick={()=>{
            return dispatch(addProduct({id:idProduct, name:nameP,imageUrl:src,price:price}))
        }}>
            Ajouter 
        </button>
      </div>
      <div className="divtoolkit">
        {products.map((product) => {
          return (
            <div>
              <img src={product.imageUrl} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={()=>{
                return dispatch(deleteProduct(product.id))
              }}>Supprimer</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
