import "./catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../sources/dataServices";

function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(function () {
        console.log("component loaded");
        loadCatalog();
    });

    function loadCatalog() {
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    }
    return (
        <div className="catalog">
            <h1> Look at out menu</h1>

            {products.map((p) => ( < Product data={p} />  ))}
        </div>
    );
}

export default Catalog;
