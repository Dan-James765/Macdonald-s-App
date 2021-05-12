import React from "react";
import { Link } from "react-router-dom";

function CardHomeScreen({ info, image }) {
  return (
    <Link to="/order">
      <div className="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 delay-75">
        <img src={image} alt="" className="" />
        <div className="px-6 py-4">
          <h1 className="font-semibold text-lg mb-2 text-center">{info}</h1>
        </div>
      </div>
    </Link>
  );
}

export default CardHomeScreen;
