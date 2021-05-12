import React from "react";

function CardFoodOrder({ info, image, price }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer transform hover:scale-105 delay-75">
      <img src={image} alt="" className="object-contain max-w-md max-h-52 " />
      <div className="px-6 py-4">
        <h1 className="font-semibold text-lg mb-2 text-center">{info}</h1>
        <h2 className="font-semibold text-xs mb-2 text-center text-gray-400">
          {price}
        </h2>
      </div>
    </div>
  );
}

export default CardFoodOrder;
