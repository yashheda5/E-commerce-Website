// Product.js
import React from "react";
import toast from "react-hot-toast"; // Import toast from react-hot-toast
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to the Cart"); // Display success toast
  };

  const removeFromCart = () => {
    dispatch(remove(post));
    toast.error("Item removed from Cart"); // Display success toast
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 
    transitiion duration-300 ease-in shadow-2xl rounded-xl gap-3 p-4 mt-10">
      <p className="text-gray-700 font-semibold text-lg  text-left text-truncate w-40 mt-1">{post.title}</p>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      <div className="h-[180px]">
      <img src={post.image} alt={post.title} className="w-full h-full" />
      </div>
      <div className="flex gap-12 items-center w-full mt-5 ml-11">
      <p className="text-green-600 font-semibold ">${post.price}</p>
      
      {cart.some((p) => p.id === post.id) ? (
        <button className="text-gray-500 border-2 border-gray-700 rounded-full
         font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transitiion duration-300 ease-in" onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button className="text-gray-500 border-2 border-gray-700 rounded-full
         font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transitiion duration-300 ease-in" onClick={addToCart}>Add Item</button>
      )}
      
     
      </div>
    
    </div>
  );
};

export default Product;
