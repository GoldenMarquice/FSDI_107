import "./quantityPicker.css";
import {useState} from "react"

function QuantityPicker (){

    let [quantity, setQuantity] = useState(1);
    
    function increase()
{
    console.log("increasing quantity");
    let val = quantity + 1;
    setQuantity(val);
}


function decrease ()
{
    console.log("decrease quantity");
    if (quantity === 1) return;
    let val = quantity - 1;
    setQuantity(val);
}
    return(
        <div className="container-quantityPicker"> 
        <button disabled= {quantity === 1} className="btn btn-primary btn-sm" onClick={decrease}> - </button>
        <label>{quantity}</label>
        <button className="btn btn-primary btn-sm" onClick={increase}> + </button>
        </div>


    )
}

export default QuantityPicker;