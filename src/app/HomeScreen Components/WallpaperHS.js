import React from "react";
import { Link } from "react-router-dom";

function WallpaperHS() {
  return (
    <>
      <div className="flex">
        <div className="flex items-center p-4 bg-gray-50 bg-opacity-0">
          <p className="flex items-center flex-col font-semibold px-20 py-20 text-3xl text-awesomegreen">
            The Spicy Veggie One!
            <h1 className="text-gray-500 text-xs flex flex-col py-5 break-words text-center">
              Perfect with Chocolate Chip Cookie Latte 🍪&☕️ Velvety milk and
              dark Espresso!
            </h1>
            <Link to="/order">
              <button class="bg-white  text-awesomegreen hover:text-green-900 hover:bg-gray-50 font-semibold py-1 px-2 border border-gray-400 rounded shadow text-base ">
                Order Now!
              </button>
            </Link>
          </p>
        </div>
        <div className=" mr-auto object-contain max-w-full">
          <img
            src="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/promo/desktopnfl/spicy-veggie.jpg?$Publication_One_Column_Desktop$"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default WallpaperHS;
