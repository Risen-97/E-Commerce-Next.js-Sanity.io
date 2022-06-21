import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="py-20 ">
      <h2 className="title">Contact us</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 bg-white shadow-xl overflow-hidden border-t-8 border-yellow-300">
        <form className="col-span-2 p-20 ">
          <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">First Name :</label>
              <input type="text" className="inputContact" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Last Name :</label>
              <input type="text" className="inputContact" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Email :</label>
              <input type="text" className="inputContact" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Title :</label>
              <input type="text" className="inputContact" />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Message :</label>
            <textarea
              className="border-2 w-full p-2 outline-none border-gray-400 mb-5"
              cols="30"
              rows="7"
            ></textarea>
          </div>

          <button
            type="button"
            className="font-medium text-white bg-black px-6 py-2 w-fit  rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            Send Your Message
          </button>
        </form>
        <div className="relative h-full hidden lg:block">
          <div className="darkBg"></div>
          <Image
            src="/assets/contact.jpg"
            layout="fill"
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
