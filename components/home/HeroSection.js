import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="">
      <div className="h-[80vh] curve relative bg-orange-400 overflow-hidden grid grid-cols-1 lg:grid-cols-2 text-white">
        <div className="darkBg lg:hidden"></div>
        <div className="flex flex-col absolute lg:static justify-center items-center lg:items-start text-center h-full w-full lg:w-auto lg:h-auto lg:text-left  px-5 lg:px-0 lg:max-w-md mx-auto z-20">
          <h1 className="capitalize text-3xl lg:text-6xl lg:leading-[5rem] font-medium mb-5 ">
            every purchase will be made with pleasure
          </h1>
          <p className="text-lg">
            Buying and selling of goods or services using the internet.
          </p>

          <Link href="/products">
            <a className="flex items-end font-medium gap-3 bg-black px-6 py-2 w-fit mt-10 rounded-md hover:bg-white hover:text-black transition duration-300">
              Start shopping
              <MdKeyboardArrowRight className="w-5 h-5 bg-white rounded-full text-black" />
            </a>
          </Link>
        </div>
        <div className="relative w-full h-full z-10">
          <Image
            src="/assets/hero-bg.png"
            layout="fill"
            priority
            objectFit="cover"
            className="h-full w-full"
          />
        </div>
        <div className="absolute hidden lg:block w-[550px] h-[550px] bg-orange-300 right-36 bottom-40 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
