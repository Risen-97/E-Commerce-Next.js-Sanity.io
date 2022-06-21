import React from "react";
import { useCart } from "../../context/cart-context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartBarItem from "./CartBarItem";

const CartBar = () => {
  const { state, dispatch } = useCart();

  return (
    <section
      className={`fixed flex flex-col justify-between overflow-hidden py-10 px-4 right-0 bottom-0 z-20 bg-white w-64 lg:w-96 shadow-xl h-[calc(100%_-_64px)] transition duration-500 ${
        state.showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute left-2 top-5"
        onClick={() => dispatch({ type: "CLOSE" })}
      >
        <AiOutlineCloseCircle className="w-6 h-6 " />
      </button>

      <div className=" flex-1 scrollbar-thin  pr-4 scrollbar-thumb-zinc-900 scrollbar-track-gray-100 overflow-auto">
        <h2 className="text-center my-2 text-xl md:text-3xl ">Cart Items</h2>

        <div className="my-5 ">
          {state.cartItems.length > 0 &&
            state.cartItems.map((item) => {
              return <CartBarItem key={item._id} item={item} />;
            })}

          {state.cartItems.length < 1 && (
            <div className="flex items-center justify-center">
              <img src="/assets/empty-cart.png" alt="" />
            </div>
          )}
        </div>
      </div>

      <button
        disabled={state.cartItems < 1}
        className="w-full bg-indigo-600 py-2 text-sm md:text-[16px] rounded-lg text-white font-medium hover:bg-indigo-800 transition duration-300 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed"
      >
        Checkout (${state.totalPrice})
      </button>
    </section>
  );
};

export default CartBar;
