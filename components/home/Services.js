import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiPriceTagLine } from "react-icons/ri";
import { GiCycle } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import Image from "next/image";
const servicesInfo = [
  {
    icon: <FaShippingFast className="w-6 h-6" />,
    title: "fast & free <br/> shipping",
    description: "lorem ipsum is simply dummy text the printing and",
  },
  {
    icon: <RiPriceTagLine className="w-6 h-6" />,
    title: "your best <br/>price matching",
    description: "lorem ipsum is simply dummy text the printing and",
  },
  {
    icon: <GiCycle className="w-6 h-6" />,
    title: "24/7 supports",
    description: "lorem ipsum is simply dummy text the printing and",
  },
  {
    icon: <FiPackage className="w-6 h-6" />,
    title: "hassle free returns",
    description: "lorem ipsum is simply dummy text the printing and",
  },
];
const Services = () => {
  return (
    <section className="py-20 ">
      <h2 className="title">Our Services</h2>

      <div className="grid grid-cols-1 justify-items-center  md:grid-cols-2 gap-5">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-10 md:gap-0">
          {servicesInfo.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center text-center md:text-left md:items-start flex-col gap-2"
              >
                {item.icon}
                <div
                  className="font-bold capitalize"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="hidden md:block h-[500px] relative w-full rounded-lg overflow-hidden">
          <Image
            src="/assets/services.jpg"
            layout="fill"
            alt=""
            className="w-full h-full"
            objectFit=" object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
