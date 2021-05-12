import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-10">
        <hr className="w-full border-gray-300-800 flex justify-center m-auto border opacity-70" />
        <div className="flex flex-row justify-center pt-10 ">
          <div className="flex flex-col max-w-lg px-5">
            <h1 className="cursor-pointer font-bold hover:text-gray-800">
              Customer Services
            </h1>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              FAQ's
            </ul>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Contact Us
            </ul>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Privacy Policies
            </ul>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Terms & Conditions
            </ul>
          </div>
          <div className="flex flex-col px-5">
            <h1 className="cursor-pointer font-bold hover:text-gray-800">
              Careers
            </h1>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Locations
            </ul>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Openings
            </ul>
          </div>
          <div className="flex flex-col px-5">
            <h1 className="cursor-pointer font-bold hover:text-gray-800">
              MC Subscription
            </h1>

            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Bronze Package
            </ul>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Silver Package
            </ul>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Gold Package
            </ul>
            <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
              Platinum Package
            </ul>
          </div>
          <div className="text-awesomegreen flex text-3xl ">
            <Link>
              <div className="hover:text-green-800">
                <AiOutlineTwitter />
              </div>
            </Link>
            <Link>
              <div className="hover:text-green-800">
                <AiOutlineFacebook />
              </div>
            </Link>
            <Link>
              <div className="hover:text-green-800">
                <AiOutlineInstagram />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
