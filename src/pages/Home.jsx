import Header from "../components/Header";
import './Home.css'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [superProducts, setSuperProducts] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((superProducts) => setSuperProducts(superProducts))
    })
    // .catch((error) => {
    //     console.log("Fehler beim Laden", error);
    // });

    return ( 
        <section className="PageSection">
            <Header />
            
            {superProducts ? (
                <article className="shop">
                    {superProducts.map((item, index) => (
                        <div className="shop-item" key={index}>
                            <img src={item.image} alt={item.title} />
                            <p className="price">{item.price}€</p>
                            <h4 className="title">{item.title}</h4>
                            <NavLink className="link" to={`/productdetail/${item.id}`}>Read more</NavLink>
                        </div>
                    ))}
                </article>
                ) : (
                    <p className="loading">Daten werden geladen ...🌝</p>
                  )}
        </section>                
     );
}
 
export default Home;