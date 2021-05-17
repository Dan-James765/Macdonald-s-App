import React from "react";
import HeaderItem from "./HeaderItem";
import { MdRestaurantMenu } from "react-icons/md";
import { FaEnvira } from "react-icons/fa";
// import { TiTick } from "react-icons/ti";
import { IoIosPin } from "react-icons/io";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { HiLogin } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";

function Header() {
  return (
    <>
      <header className="flex items-center pt-5 justify-start shadow-md bg-awesomegreen ">
        <div className="flex flex-row justify-start">
          <Link TP="/">
            <HeaderItem title="HOME" Icon={VscAccount} />
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
          <Link to="/">
            <div>
              <img
                className="object-contain h-12 mb-6"
                src="http://logok.org/wp-content/uploads/2014/06/McDonalds-logo-880x660.png"
                alt=""
              />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
