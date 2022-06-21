import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useCart } from "../../context/cart-context";
import { useRouter } from "next/router";
const Navbar = () => {
  const { state, dispatch } = useCart();
  const router = useRouter();
  return (
    <header className="h-16 bg-white shadow-md w-full py-4 px-6 flex items-center justify-between top-0 sticky z-40">
      <Link href="/">
        <h2 className="text-2xl font-bold text-gray-500 mr-8 cursor-pointer">
          MoStore
        </h2>
      </Link>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
          <Link href="/">
            <a
              className={`link-underline ${
                router.pathname == "/" && "activeNav"
              } `}
            >
              Home
            </a>
          </Link>
          <Link href="/products">
            <a
              className={`link-underline ${
                router.pathname == "/products" && "activeNav"
              } `}
            >
              Products
            </a>
          </Link>
          <Link href="/">
            <a className="link-underline">About</a>
          </Link>
        </ul>

        <button
          onClick={() => dispatch({ type: "TOGGLE" })}
          className="relative"
        >
          <BsCart4 className="w-6 h-6" />
          <span className="absolute w-5 h-5 flex items-center justify-center text-sm bg-red-600 rounded-full -left-2 -top-2 text-white">
            {state.totalQuantity}
          </span>
        </button>
      </div>
    </header>
  );
};
export default Navbar;
