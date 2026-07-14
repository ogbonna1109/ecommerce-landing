import React, { useState } from 'react'
import { createContext, useContext } from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);


    const addToCart = () => {};

    const removeFromCart = () => {};

    const increaseQuantity = () => {};

    const decreaseQuantity = () => {};

    const clearCart = () => {};

    const calculateTotal = () => {};

    const value ={
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    calculateTotal
    }
    
  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
