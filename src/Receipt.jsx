import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return <div className="receipt-item" key={item.name}>
                <div className="receipt-text">
                    {item.name} x {item.count}
                </div>
            <div className="receipt-text">
                    ${item.price.toFixed(2)}
                </div>
            </div>
  }
  
  sumTotal(items) {
      return items.reduce((prev, cur) => prev + cur.price * cur.count, 0);
  }



  render() {
    const items = this.props.items;
    return (
      <div className="receipt">

        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.sumTotal(items).toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;