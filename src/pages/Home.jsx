import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/appslice";

const Home = () => {
  const count = useSelector((state) => state.count);
  const [cartItem, setcartItem] = useState("");
  let dispatch = useDispatch();
  return (
    <>
      {/* <Navbar/> */}

      <h1>{count}</h1>
      <h1>Home my home, home my home, when shall I see my home</h1>

      <input type="text" onChange={(e) => setcartItem(e.target.value)} />

      <button onClick={() => dispatch(addToCart(cartItem))}>
        add item to cart
      </button>
    </>
  );
};

export default Home;
