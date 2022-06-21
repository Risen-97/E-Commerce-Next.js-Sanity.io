import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="min-h-40 py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-10 xl:px-0 flex flex-col gap-10 md:gap-0 md:flex-row justify-evenly">
        <div className="">
          <h4 className="text-xl font-medium mb-5">About the store</h4>
          <ul className="flex flex-col gap-2">
            <li className="footerLink">Home</li>
            <li className="footerLink">Become a customer</li>
            <li className="footerLink">About us</li>
            <li className="footerLink">FAQ</li>
            <li className="footerLink">Return policy</li>
            <li className="footerLink">Contact us</li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-xl font-medium mb-5">Language</h4>
          <ul className="grid grid-cols-3 gap-3">
            <li className="footerLink">Arabic</li>
            <li className="footerLink">English</li>
            <li className="footerLink">Deutsch</li>
            <li className="footerLink">Espanol</li>
            <li className="footerLink">Francais</li>
            <li className="footerLink">Indonesian</li>
            <li className="footerLink">Italian</li>
            <li className="footerLink">Netherlands</li>
            <li className="footerLink">Polnisch</li>
            <li className="footerLink">Portuges</li>
            <li className="footerLink">Russian</li>
            <li className="footerLink">Turkish</li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-xl font-medium mb-5">Get in touch</h4>
          <ul className="flex items-center gap-5">
            <li className="cursor-pointer text-[#3b5998]">
              <BsFacebook className="w-8 h-8" />
            </li>
            <li className="cursor-pointer text-[#1DA1F2]">
              <AiFillTwitterCircle className="w-8 h-8" />
            </li>
            <li className="cursor-pointer text-[#0A66C2]">
              <AiFillLinkedin className="w-8 h-8" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
