import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { addToCart } from "../redux/cartSlice";
import "../styles/productdetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        `https://6697efe202f3150fb66f8a35.mockapi.io/property/${id}`
      );
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // console.log(product);
    const productWithId = { productId: Math.random(), ...product };
    dispatch(addToCart(productWithId));
    console.log(productWithId);
    navigate("/cart");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="product-container" style={{ minHeight: "85vh" }}>
        <div className="pannel">
          <div className="left">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="right">
            <h1>{product.title}</h1>
            <br />
            <p>
              <span>Price:</span>
              {product.price}$
            </p>
            <br />
            <p>
              <span>Description:</span> {product.description}
            </p>
            <br />
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
