import React from "react";
import { Link } from "react-router-dom";

function WallpaperHS2() {
  return (
    <>
      <div className="flex">
        <div className=" mr-auto object-contain p-0">
          <img
            src="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/hero/desktopnfl/bacon-clubhouse-double-hm-cs-desktop.jpg?$Hero_Desktop$"
            alt=""
          />
        </div>
        <div className="flex items-center bg-gray-50 p-4 bg-opacity-40">
          <p className="flex items-center flex-col font-semibold px-20 py-20 text-3xl text-awesomegreen">
            The Big Mac!
            <h1 className="text-gray-500 text-xs flex flex-col py-5 break-words text-center">
              The world's best burger just keeps getting better. Check out the
              new formula below!
            </h1>
            <Link to="/order">
              <button class="bg-white  text-awesomegreen hover:text-green-900 hover:bg-gray-50 font-semibold py-1 px-2 border border-gray-400 rounded shadow text-base">
                Order Now!
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default WallpaperHS2;
