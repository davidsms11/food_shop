import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

const menuItems = [
  { text: "Orders", icon: <TbTruckDelivery size={25} className="mr-4" /> },
  { text: "Favorites", icon: <MdFavorite size={25} className="mr-4" /> },
  { text: "Wallet", icon: <FaWallet size={25} className="mr-4" /> },
  { text: "Help", icon: <MdHelp size={25} className="mr-4" /> },
  { text: "Promotion", icon: <AiFillTag size={25} className="mr-4" /> },
  { text: "Best One", icon: <BsFillSaveFill size={25} className="mr-4" /> },
  {
    text: "Invite Friends",
    icon: <FaUserFriends size={25} className="mr-4" />,
  },
];
function Navbar() {
  const [nav, setNav] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-8">
        {/*left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30}></AiOutlineMenu>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text4xl px-2">
            Best <span className="font-bold">Eats</span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
            <p
              className={`transition-colors ease-in-out duration-500 ${
                isActive ? "bg-black text-white" : "bg-gray-200 text-gray-500"
              } rounded-full p-2`}
              onClick={toggleActive}
            >
              Delivery
            </p>
            <p
              className={`transition-colors ease-in-out duration-500 ${
                isActive ? "bg-gray-200 text-gray-500" : "bg-black text-white"
              } rounded-full p-2`}
              onClick={toggleActive}
            >
              Pickup
            </p>
          </div>
        </div>
        {/*Search Imput  */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25}> </AiOutlineSearch>
          <input
            className="bg-transparent p-2 focus:outline-none"
            type="text"
            placeholder="Search food"
          />
        </div>
        {/*Cart button */}
        <button className="bg-black text-white md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2"></BsFillCartFill>Cart
        </button>

        {/*mobile menu */}
        {/*overlay*/}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/*side drawer menu */}

        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[-100%] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          ></AiOutlineClose>
          <h2 className="text-2xl p-4">
            Best <span className="font-bold">Eats</span>
          </h2>
          <nav>
            <ul className="flex flex-col text-gray-800">
              {menuItems &&
                Array.isArray(menuItems) &&
                menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl py-4 flex p-4  cursor-pointer"
                  >
                    {item.icon}
                    {item.text}
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
