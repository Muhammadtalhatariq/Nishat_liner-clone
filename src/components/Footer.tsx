import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

interface NavItems {
  name: string;
  path: string;
}

const navitems: NavItems[] = [
  {
    name: "Blog",
    path: "#blog",
  },
  {
    name: "About Us",
    path: "#aboutus",
  },
  {
    name: "Catalogues",
    path: "#catalogues",
  },
  {
    name: "Privacy Policy",
    path: "#PrivacyPolicy",
  },
  {
    name: "Terms & Conditions",
    path: "#termszconditions",
  },
    {
    name: "Sale Guide",
    path: "#SaleGuide",
  },
];
const serviesitems: NavItems[] = [
  {
    name: "FAQs",
    path: "#faq",
  },
  {
    name: "Order Tracking",
    path: "#ordertracking",
  },
  {
    name: "Store Locator",
    path: "#storelocator",
  },
  {
    name: "Privacy Policy",
    path: "#PrivacyPolicy",
  },
  {
    name: "Contact Us",
    path: "#contactus",
  },
];

const Footer: React.FC = () => {
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenNews, setIsOpenNews] = useState(false);

  return (
    <>
      <div className="footer bg-[#F6F6F8] font-mont py-4">
        <div className="hidden md:flex flex-col md:flex-row w-full px-4">
          <div className="contact  md:w-1/4 px-4 ">
            <h1 className="font-bold text-xl py-2"> Contact us</h1>
            <div className="flex flex-col space-y-4">
              <div className="flex gap-2 items-center">
                <SlLocationPin size={25} />{" "}
                <p> 21 Km Ferozpur Road Lahore Pakistan.</p>
              </div>
              <div className="flex gap-2 items-center">
                <TfiEmail size={20} /> <p>nishatonline@nishatmills.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <FiPhone size={20} /> <p>+92 42 111 647 428</p>
              </div>
            </div>
          </div>
          <div className="information md:w-1/4 px-6">
            <h1 className="font-bold text-xl py-2">Information </h1>
            <ul>
              {navitems.map((item, index) => (
                <li key={index} className="py-1">
                  <a className="cursor-pointer" href={item.path}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="services md:w-1/4 px-6 ">
            <h1 className="font-bold text-xl py-2">Customer Services </h1>
            <ul>
              {serviesitems.map((item, index) => (
                <li key={index} className="py-1">
                  <a className="py-1 cursor-pointer" href={item.path}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="latest-newa md:w-2/4 md:px-10">
            <h1 className="font-bold  text-xl py-2">Newsletter Signup </h1>
            <p className="py-4">
              Subscribe to our newsletter and get latest updates.
            </p>
            <div className="border border-black py-[2px] flex gap-2 md:w-96">
              <input
                className="outline-none w-68 px-4"
                type="text"
                placeholder="Your email address"
              />
              <button className="text-white bg-black py-2 px-4 cursor-pointer">
                Subscribe
              </button>
            </div>
            <div className=" icons flex gap-4 items-center py-4">
              <FaFacebookF size={25} className="cursor-pointer" />
              <FaInstagram size={25} className="cursor-pointer" />
              <FaYoutube size={25} className="cursor-pointer" />
            </div>
          </div>
        </div>
        {/* mbl view */}
        <div className="flex md:hidden flex-col md:flex-row w-full px-4">
          <div className="contact md:w-1/4 px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-lg py-2 font-bold"> Get In Touch</h1>{" "}
              <span onClick={() => setIsOpenContact(!isOpenContact)}>
                {isOpenContact ? <FiMinus /> : <GoPlus />}
              </span>
            </div>
            {isOpenContact && (
              <div className="flex flex-col space-y-6 pt-2 py-6">
                <div className="flex gap-2 items-center">
                  <SlLocationPin size={25} />{" "}
                  <p> 21 Km Ferozpur Road Lahore Pakistan.</p>
                </div>
                <div className="flex gap-2 items-center">
                  <TfiEmail size={20} /> <p>nishatonline@nishatmills.com</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FiPhone size={20} /> <p>+92 42 111 647 428</p>
                </div>
              </div>
            )}
          </div>
          <div className="information md:w-1/4 px-4">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg py-2">Information </h1>{" "}
              <span onClick={() => setIsOpenInfo(!isOpenInfo)}>
                 {isOpenInfo ? <FiMinus /> : <GoPlus />}
              </span>
            </div>
            {isOpenInfo && (
              <ul className="pt-2 py-6">
                {navitems.map((item, index) => (
                  <li key={index} className="py-1">
                    <a className=" cursor-pointer" href={item.path}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="servies md:w-1/4 px-4 ">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg py-2">Customer Services </h1>{" "}
              <span  onClick={() => setIsOpenServices(!isOpenServices)}>
            {isOpenServices ? <FiMinus /> : <GoPlus />}
              </span>
            </div>
            {isOpenServices && (
              <ul className="pt-2 py-6">
                {serviesitems.map((item, index) => (
                  <li key={index} className="py-1">
                    <a className="py-1 cursor-pointer" href={item.path}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="latest-news md:w-2/4 px-4 md:px-10">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg py-2">Newsletter Signup </h1>{" "}
              <span onClick={()=>setIsOpenNews(!isOpenNews)}>
                   {isOpenNews ? <FiMinus /> : <GoPlus />}
              </span>
            </div>
            {isOpenNews && (
              <div>
                <p className="py-4">
                  Subscribe to our newsletter and get latest updates.
                </p>
                <div className="border border-black py-[2px] flex flex-col gap-1 md:w-96">
                  <input
                    className="outline-none w-68 px-4 text-center"
                    type="text"
                    placeholder="Your email address"
                  />
                  <button className="text-white bg-black py-2 px-4 cursor-pointer">
                    Subscribe
                  </button>
                </div>
                <div className=" icons flex gap-4 items-center py-4">
                  <FaFacebookF size={25} className="cursor-pointer" />
                  <FaInstagram size={25} className="cursor-pointer" />
                  <FaYoutube size={25} className="cursor-pointer" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* bottom footer  */}
      <div className="md:pb-6 flex flex-col md:flex-row justify-between items-center w-full text-sm md:px-10">
        <p className=" text-[#8F8F8F]">
          Copyright © 2025 Nishat. All rights reserved.{" "}
        </p>
        <div>
          <div className="flex gap-4 items-center py-4 md:pr-32">
            <img src="/ft-icon.svg" alt="" />
            <img src="/visa.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
