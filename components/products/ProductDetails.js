import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { GrAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import { useCart } from "../../context/cart-context";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import ImageNext from "../../lib/ImageNext";
import { fadeInUp, stragger } from "../../lib/framerFade";
const ProductDetails = ({ product }) => {
  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const { dispatch } = useCart();

  const router = useRouter();

  return (
    <main className="2xl:h-screen flex flex-col items-center 2xl::justify-center overflow-hidden">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-96 lg:h-full lg:w-full">
          <ImageNext mySanityData={product?.image[index]} />
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={stragger}
          className="bg-white flex flex-col items-start py-12 lg:pt-20 px-10 2xl:px-28  shadow-lg"
        >
          <motion.button
            variants={fadeInUp}
            onClick={() => router.push("/products")}
            className="text-xs lg:text-[16px] underline underline-offset-8 hover:scale-105 "
          >
            Back To Home
          </motion.button>
          <motion.h1
            variants={fadeInUp}
            className="text-xl lg:text-3xl my-4 font-bold capitalize"
          >
            {product?.name}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-sm max-w-lg leading-8">
            {product?.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex items-center w-96  h-20 overflow-hidden mt-10 gap-5"
          >
            {product?.image.map((item, idx) => {
              return (
                <article
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden cursor-pointer ${
                    index === idx ? "border border-red-900" : ""
                  }`}
                >
                  <ImageNext mySanityData={item} />
                </article>
              );
            })}
          </motion.div>

          <motion.h4 variants={fadeInUp} className="text-3xl my-10">
            ${product?.price}
          </motion.h4>
          <motion.div variants={fadeInUp} className="flex items-center gap-10">
            <div className="grid grid-cols-3 border border-gray-400 rounded-md">
              <button
                onClick={() =>
                  setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1))
                }
                className="cursor-pointer px-2"
              >
                <BiMinus className="w-3 h-3" />
              </button>
              <span className="justify-self-center">{qty}</span>
              <button
                onClick={() => setQty((prevQty) => prevQty + 1)}
                className="cursor-pointer px-2"
              >
                <GrAdd className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={() => {
                dispatch({ type: "ADD_ITEM", payload: { ...product, qty } });
                toast.success(`${product?.name} added to the cart.`);
              }}
              className="bg-black text-white py-1 px-8 rounded-sm hover:bg-gray-700 transition duration-300"
            >
              Add To Cart
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default ProductDetails;
