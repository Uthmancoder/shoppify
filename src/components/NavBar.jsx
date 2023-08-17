import React, { useState } from "react";
import { TbCapture } from "react-icons/tb";
import { RiRefreshLine } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiMobileVibration } from "react-icons/bi";
import  {LiaAngleRightSolid} from "react-icons/lia"

const NavBar = () => {
  const [menu, setmenu] = useState(false);

  const handleMenu = () => {
    setmenu(!menu);
  };
  return (
    <div>
      <div className="w-full flex justify-between md:px-6 items-center bg-gray-100 mx-auto  md:flex lg:flex">
        <ul className="flex items-center ">
          <li className="font-semibold text-xs p-4">Account</li>
          <li className="font-semibold text-xs p-4">Track Order</li>
          <li className="font-semibold text-xs p-4">Support</li>
        </ul>
        <div className="flex items-center hidden   md:flex lg:flex">
          <select
            className=" border border-gray-300 rounded-sm m-4"
            name="location"
            id="location"
          >
            <option value="Nigeria">Nigeria</option>
            <option value="United State">United State</option>
            <option value="Canada">Canada</option>
          </select>
          <select
            className=" border border-gray-300 rounded-sm m-4"
            name="currency"
            id="currency"
          >
            <option value="NAIRA">NAIRA</option>
            <option value="USD">USD</option>
            <option value="EURO">EURO</option>
          </select>
          <select
            className=" border border-gray-300 rounded-sm m-4"
            name="language"
            id="language"
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>

      {/* Nav2 */}
      <div className="w-full flex justify-between items-center px-6 bg-gray-50 py-3 mx-auto">
        {/* logo-section */}
        <div className=" flex items-center">
          <TbCapture size={40} />
          <h1 className="text-yellow-500 text-4xl font-extrabold font-poppins">
            Shopp<span className="text-4xl text-black font-extrabold">ify</span>{" "}
          </h1>
        </div>

        <div className="border border-gray-300 rounded-sm  w-fit h-fit hidden lg:block ">
          <input
            type="search"
            className="p-2 w-[350px] bg-none outline-none cursor-pointer"
            name="search"
            id="search"
            placeholder="Search Products"
          />
          <button className="bg-yellow-500 py-2 px-5 cursor-pointer  text-dark hover:bg-yellow-600 hover:text-gray-200 font-semibold">
            Search
          </button>
        </div>

        <div className="flex items-center">
          <ul className="lg:flex  sm:flex  items-center hidden md:flex ">
            <li className="p-4">
              <RiRefreshLine size={20} />
            </li>
            <li className="p-4">
              <AiOutlineHeart size={20} />
            </li>
            <li className="p-4 hidden sm:block">
              <AiOutlineShoppingCart size={20} />
            </li>
            <li className="p-4">
              {" "}
              <AiOutlineUser size={20} />
            </li>
          </ul>
          <div onClick={handleMenu} className="p-4 block md:hidden">
            {!menu ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
          </div>
        </div>
      </div>

      {/* medium screen Sidenav */}

      {menu ? (
        <div className="w-[60%] bg-slate-200 fixed duration-[0.7s] ease-in-out top-0 left-0 h-screen ">
          <ul className="flex justify-end ">
            <li className="p-4">
              <RiRefreshLine size={20} />
            </li>
            <li className="p-4">
              <AiOutlineHeart size={20} />
            </li>
          </ul>
          <div className=" flex items-center m-4">
            <TbCapture size={40} />
            <h1 className="text-yellow-500 text-4xl font-extrabold font-poppins">
              Shopp
              <span className="text-4xl text-black font-extrabold">
                ify
              </span>{" "}
            </h1>
          </div>
          {/* Search */}
          <div className="border flex items-center border-gray-300 rounded-sm  w-fit h-fit mx-auto ">
            <input
              type="search"
              className="p-2  bg-none outline-none cursor-pointer"
              name="search"
              id="search"
              placeholder="Search Products"
            />
            <button className="bg-yellow-500 py-[11px] px-2  mx-auto cursor-pointer  text-dark hover:bg-yellow-600 hover:text-gray-200 font-semibold">
              <AiOutlineSearch />
            </button>
          </div>

          {/* lists */}
          <h1 className="m-3 text-gray-800 font-semibold text-2xl">
            Categories
          </h1>

          {/* categories items */}
          <div className="flex items-center justify-between p-5  ">
            <BiMobileVibration/>
            <h1>Mobile & Laptops</h1>
            <LiaAngleRightSolid/>
          </div>
          <div className="flex items-center justify-between p-5  ">
            <BiMobileVibration/>
            <h1>Mobile & Laptops</h1>
            <LiaAngleRightSolid/>
          </div>
          <div className="flex items-center justify-between p-5  ">
            <BiMobileVibration/>
            <h1>Mobile & Laptops</h1>
            <LiaAngleRightSolid/>
          </div>
          <div className="flex items-center justify-between p-5  ">
            <BiMobileVibration/>
            <h1>Mobile & Laptops</h1>
            <LiaAngleRightSolid/>
          </div>
          <div className="flex items-center justify-between p-5  ">
            <BiMobileVibration/>
            <h1>Mobile & Laptops</h1>
            <LiaAngleRightSolid/>
          </div>
          <div className="flex items-center justify-between p-5  ">
            <BiMobileVibration/>
            <h1>Mobile & Laptops</h1>
            <LiaAngleRightSolid/>
          </div>
          <div className="flex items-center justify-between p-5  ">
            <BiMobileVibration/>
            <h1>Mobile & Laptops</h1>
            <LiaAngleRightSolid/>
          </div>
          <div className="flex items-center justify-between p-5  ">
            <BiMobileVibration/>
            <h1>Mobile & Laptops</h1>
            <LiaAngleRightSolid/>
          </div>
        </div>
      ) : (
        <div className="w-[60%] fixed left-[-60%] ">
          <div className=" flex items-center m-4">
            <TbCapture size={40} />
            <h1 className="text-yellow-500 text-4xl font-extrabold font-poppins">
              Shopp
              <span className="text-4xl text-black font-extrabold">
                ify
              </span>{" "}
            </h1>
          </div>
          <ul className="flex items-center ">
            <li className="font-semibold text-xs p-4">Account</li>
            <li className="font-semibold text-xs p-4">Track Order</li>
            <li className="font-semibold text-xs p-4">Support</li>
          </ul>
          <div className="grid items-center ">
            <select
              className=" border border-gray-300 rounded-sm m-4"
              name="location"
              id="location"
            >
              <option value="Nigeria">Nigeria</option>
              <option value="United State">United State</option>
              <option value="Canada">Canada</option>
            </select>
            <select
              className=" border border-gray-300 rounded-sm m-4"
              name="currency"
              id="currency"
            >
              <option value="NAIRA">NAIRA</option>
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
            </select>
            <select
              className=" border border-gray-300 rounded-sm m-4"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
