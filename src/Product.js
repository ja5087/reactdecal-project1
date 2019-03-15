import React from "react";
import { timingSafeEqual } from "crypto";
class Product extends React.Component {

    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.clicked = 0;
    }
    
    addToCart(x) {
        if(this.clicked >= this.props.product.stock) {
            alert("There are too many " + this.props.product.name + "(s) in your cart!");
            return;
        }
        
        this.clicked += 1;
        alert("There are " + this.clicked + " " + this.props.product.name +" in your cart!");
    }

    render() {
        return (

                <div className="card">
                    <div className="content">
                    <div className="header">
                            {this.props.product.name}
                        </div>
                        <div className="description">
                            Price: ${this.props.product.cost}
                        </div>
                        </div>
                        <div className="ui bottom attached button" onClick={this.addToCart}>
                        <i className="add icon"></i>
                            Add to Cart
                        </div>
                    </div>
        )
    }
}

export default Product;