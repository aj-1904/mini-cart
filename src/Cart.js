import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
          products: [
              {
                price: 999,
                title: "Watch",
                qty: 1,
                img: "",
                id: 1
              },
              {
                price: 9999,
                title: "Mobile Phone",
                qty: 1,
                img: "",
                id: 2
              },
              {
                price: 19999,
                title: "Laptop",
                qty: 1,
                img: "",
                id: 3
              }

          ]
        };
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }
    handleIncreaseQuantity = (product) => {
        console.log('Hey please increase the qty of ', product);
        const { products } = this.state;
        const index = products.indexOf(product)

        products[index].qty += 1;

        this.setState({
            products
        })
    }
    render () {
        const { products } = this.state
        return (
           <div className="cart">
               {/* passing props */}
                { products.map((product) => {
                    return <CartItem product={product} key={product.id} onIncreaseQuantity={this.handleIncreaseQuantity}/>
                })}
           </div> 
        )
    }
}
  


export default Cart;
