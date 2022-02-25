import React from "react";
import PractHead from "./PractHead";
import Box from "./Box";
const boxValue = [
  { img: "hero-bg.png", price: "$99", name: "shoe name" },
  { img: "hero-bg.png", price: "$99", name: "shoe name" },
  { img: "hero-bg.png", price: "$99", name: "shoe name" },
];

const Feature = () => {
  return (
    <section>
      <div className="text-center">
        <PractHead text={"Featured products"} />
      </div>
      <div className="flex md:flex-row flex-col  ">
        {boxValue.map((box, index) => {
          return (
            <Box key={index} img={box.img} price={box.price} name={box.name} />
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
