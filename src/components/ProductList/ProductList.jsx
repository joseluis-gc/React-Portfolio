import "./product_list.css"
import Product from "../Product/Product";
import {products} from "../../data/data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">Lorem ipsum dolor amor.</p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>

        </div>
    )
};

export default  ProductList