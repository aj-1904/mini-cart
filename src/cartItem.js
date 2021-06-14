import React from "react";

const CartItem = (props) => {
  //using promise to simulate api call
  //   testing() {
  //       const promise = new Promise((resolve, reject) => {
  //         setTimeout(()=>{
  //             resolve('done')
  //         },5000);
  //       })

  //       promise.then(() => {
  //           // setState acts like a synchronous call
  //           this.setState({ qty: this.state.qty + 10 });

  //           this.setState({ qty: this.state.qty + 10 });

  //           this.setState({ qty: this.state.qty + 10 });

  //           console.log('state', this.state);
  //       })
  //   }

  //Use arrow function for binding the instance of this to the class CartItem
  //   increaseQuantity = () => {
  //     //   console.log('this', this.state);
  //     //   setState form 1
  //     //   this.setState({
  //     //       qty: this.state.qty + 1
  //     //   }, () => {})

  //       //setState form 2 - if prevState required use this
  //       this.setState ((prevState) => {
  //         return {
  //             qty: prevState.qty + 1
  //         }
  //       })
  //   }

  //   decreaseQuantity = () => {
  //     const {qty} =  this.state;

  //     if (qty === 0) {
  //         return;
  //     }

  //     //setState form 2 - if prevState required use this
  //     this.setState ((prevState) => {
  //           return {
  //               qty: prevState.qty - 1
  //           }
  //       })
  //   }

  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} />
      </div>

      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>

        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/1828/1828926.png"
            onClick={() => onIncreaseQuantity(product)} // onClick event
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/992/992683.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
