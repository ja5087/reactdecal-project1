import React from "react";
import { timingSafeEqual } from "crypto";
class Product extends React.Component {

    constructor(props) {
        super(props);
        this.clicked = 0;
    }
    

    render() {
        return (

                <div className="card">
                    <div className="content">
                    <div className="header">
                            {this.props.product.name}
                        </div>
                        <div className="description">
                            Price: ${this.props.product.cost.toFixed(2)}
                        </div>
                        </div>
                        <div className="ui bottom attached button" onClick={() => {this.props.onAddToCart(this.props.product.name, this.props.product.cost)}}>
                        <i className="add icon"></i>
                            Add to Cart
                        </div>
                        <div className="ui bottom attached button" onClick={() => {this.props.onRemoveFromCart(this.props.product.name)}}>
                        <i className="remove icon"></i>
                            Remove from Cart
                        </div>
                    </div>
        )
    }
}

export default Product;