import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Header from "../components/Header";
import './ProductDetail.css'

const ProductDetail = () => {
    const params = useParams()

    const [productsOne, setProducts] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((productsOne) => {
                setProducts(productsOne)
            })
            .catch((error) => {
                console.log("Fehler beim Laden", error)
            })
    }, [])
    const details = productsOne?.filter((item) => {
        return item.id.toString() === params.id
    })
    return ( 
        <>
            <Header />
            {productsOne ? (
                <section className="detailSection">
                    <img className="detailImg" src={details[0].image} alt={details[0].title} />
                    <h3>{details[0].title}</h3>
                    <h5>{details[0].price} €</h5>
                    <p>{details[0].description}</p>
                </section>
                ) : (
                    <p>Daten werden geladen... 🌝</p>
                )}
        </>
     );
}
 
export default ProductDetail;