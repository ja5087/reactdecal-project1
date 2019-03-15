import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import Data from "./Data";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <div className="ui cards">
              {Data.products.map(x => <Product product={x}/>)}
            </div>
        </div>
    );
  }

}

export default Cart;
