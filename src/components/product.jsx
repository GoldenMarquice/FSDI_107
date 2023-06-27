import { useEffect } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker"

function Product (props){

    useEffect(function(){
        console.log("hello im a product");  },[]);

    return (

        <div className="product-container"> Products
        <img alt=" " src={"" + props.data.image}/> 
        <h5> {props.data.title}</h5>
        <div className="prices">
            <label htmlFor="">Price:  {props.data.price}</label>
            <label htmlFor="">Total: {props.data.total} </label>
        
            </div>
            <QuantityPicker/>
        </div>
    )
}

export default Product;