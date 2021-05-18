import React from "react";
import HeaderItem from "./HeaderItem";
import { MdRestaurantMenu } from "react-icons/md";
import { FaEnvira } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { Link } from "react-router-dom";
import { SiMcdonalds } from "react-icons/si";
import { HiLogin } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";

function Header() {
  return (
    <>
      <header className="flex items-center pt-5 justify-start shadow-md bg-awesomegreen ">
        <div className="flex flex-row justify-start items-center">
          <div>
            <Link to="/">
              <img
                className="object-contain mb-6 ml-8 h-16"
                src="http://logok.org/wp-content/uploads/2014/06/McDonalds-logo-880x660.png"
                alt=""
              />
            </Link>
          </div>

          <Link to="/">
            <HeaderItem title="HOME" Icon={SiMcdonalds} />
          </Link>
          <Link to="/order">
            <HeaderItem title="MENU" Icon={MdRestaurantMenu} />
          </Link>

          <HeaderItem title="McDONALD's GREEN" Icon={FaEnvira} />

          <HeaderItem title="STORES" Icon={IoIosPin} />
        </div>
        <div className="flex flex-row ml-auto mr-9">
          <HeaderItem title="SIGN UP" Icon={HiLogin} />

          <HeaderItem title="CHECKOUT" Icon={HiShoppingCart} />
        </div>
      </header>
    </>
  );
}

export default Header;
