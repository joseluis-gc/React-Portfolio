import "./product_list.css"
import Product from "../Product/Product";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">Lorem ipsum dolor amor.</p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>

        </div>
    )
};

export default  ProductList