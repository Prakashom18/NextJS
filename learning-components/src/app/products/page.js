export default async function Products(){
    const res = await fetch(
        "https://dummyjson.com/products"
    );
    const data = await res.json();
    return(
        <div>
            <h1> Products</h1>
            <p>{
                data.products[0].title
                }</p>
                <p>{data.products[1].title}</p>
        </div>
    )





}