import React from "react";

const Box = ({ img, price, name }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 lg:mt-0">
      <img
        src={"/img/" + img}
        className="w-2/5 mb-2 hover:scale-110 hover:cursor-pointer"
        alt=""
      />
      <p>
        <span className="pl-2 text-2xl italic">{price}</span>
        <span className="pl-2 ">{name}</span>
      </p>
    </div>
  );
};

export default Box;
