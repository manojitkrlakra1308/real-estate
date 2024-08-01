import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    console.log(productId);
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "860px" }}>
        <h2>Your Shopping Cart: </h2>
        {cartItems.length === 0 && <p>No items in cart.</p>}
        <ul>
          {cartItems.map((item) => (
            <li className="cart-container" key={Math.random()}>
              <img src={item.image} />
              <div className="pricing">
                <p>
                  {item.title} - ${item.price}
                </p>

                <button onClick={() => handleRemoveFromCart(item.productId)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
