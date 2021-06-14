import React from "react";

const Navbar = (props) => {
  
    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://img-premium.flaticon.com/png/512/2543/premium/2543369.png?token=exp=1623688894~hmac=821b99d9a3dacdecc5982d6bea38fca1" alt="cart-icon"/>
            <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    );
  }


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  

export default Navbar;
