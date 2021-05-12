import React from "react";
import { Link } from "react-router-dom";

function WakeShakeHS({ title, info, image, order, background, color }) {
  return (
    <div
      className="flex gap-10 items-center justify-center p-7 px-20"
      style={{ background }}
    >
      <div
        className="flex items-center flex-col gap-5 content-center max-w-lg"
        style={{ order, color }}
      >
        <h1
          className="font-extrabold text-4xl leading-8
         tracking-normal "
        >
          {title}
        </h1>
        <h4 className="leading-4 text-lg font-extrabold">{info}</h4>
        <Link to="/order">
          <button class="bg-awesomegreen hover:bg-green-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-white">
            Let's Go!
          </button>
        </Link>
      </div>
      <div>
        <img
          className="object-contain max-h-96 max-w-full"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}

export default WakeShakeHS;
