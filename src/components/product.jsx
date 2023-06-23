import "./product.css";
import QuantityPicker from "./quantityPicker"

function Product (){
    return (

        <div className="product-container"> Products
        <img src="https://picsum.photos/200/140"/>
        <h5> Titles goes here</h5>
        <div className="prices">
            <label htmlFor="">Price: </label>
            <label htmlFor="">Total: </label>
        <QuantityPicker/>
            </div>
        
        </div>
    )
}

export default Product;