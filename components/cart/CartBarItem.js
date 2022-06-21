import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useCart } from "../../context/cart-context";
import { toast } from "react-hot-toast";
import ImageNext from "../../lib/ImageNext";

const CartBarItem = ({ item, totalPrice }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex  justify-between border-b py-4">
      <div className="flex  gap-3">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden">
          <ImageNext mySanityData={item.image[0]} />
        </div>
        <div className="">
          <p className="text-sm mb-2">{item.name}</p>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <span>${item.price}</span>
            <p
              className={`border-l border-gray-300 pl-2 ${
                item.countInStock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.countInStock > 0 ? "In Stock" : "Out in stock"}
            </p>
          </div>
          <span className="text-xs">x{item.qty}</span>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center">
        <div className="flex items-center">
          <span></span>
          <span className="text-[16px] md:text-xl font-medium">
            ${item.qty * item.price}
          </span>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_ITEM", payload: item });
            toast.success(`${item.name} removed from the cart.`);
          }}
          className="text-xs"
        >
          <MdOutlineDelete className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartBarItem;
