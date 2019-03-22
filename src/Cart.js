import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import Data from "./Data";
import Receipt from "./Receipt";

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {cartItems: []};
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);


  }

  handleRemoveFromCart(name) {
    for(let i = 0; i < this.state.cartItems.length; i++) {
      if(this.state.cartItems[i].name === name) {
        let aCopy = [...this.state.cartItems];
        aCopy[i].count -= 1;
        if(aCopy[i].count == 0) {
          aCopy.splice(i, 1);
        }
        this.setState({cartItems: aCopy});
        return;
      }
    }
  }

  handleAddToCart(name, price) {
    for(let i = 0; i < this.state.cartItems.length; i++) {
      if(this.state.cartItems[i].name === name) {
        let aCopy = [...this.state.cartItems];
        aCopy[i].count += 1;
        this.setState({cartItems: aCopy});
        return;
      }
    }

    //didn't find one
    this.setState({cartItems: this.state.cartItems.concat({
      name: name,
      price: price,
      count: 1
    })});

    return;
  }

  render() {
    return (
        <div className="page-content">
            <div className="ui cards" style={{"justify-content": "center"}}>
              {Data.products.map(x => <Product product={x} onAddToCart={this.handleAddToCart} onRemoveFromCart={this.handleRemoveFromCart}/>)}
            </div>
            <Receipt items={this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
