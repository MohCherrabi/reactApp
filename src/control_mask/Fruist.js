export default function Fruits(props){
    return (
        <div>
            <h1>Fruits</h1><br/>
            {props.product.map((pr)=>{
                if(pr.category == "Fruits"){
                    return <p>{pr.name} {pr.price}</p>
                }
            })}
        </div>
    )
}