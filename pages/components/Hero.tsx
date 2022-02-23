import React from "react";
import Img from "./Img";
import Heading from "../Heading";
import Button from "./Button";
import Para from "./Para";
const obj: [
  {
    head: "A Simple Bookmark Manager";
    para: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.";
    img: "hero-bg.png";
    btn1: "Get it on Chrome";
    btn2: "Get it on Firefox";
  },
  {
    head: "A Simple Bookmark Manager";
    para: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.";
    img: "hero-bg.png";
    btn1: "Get it on Chrome";
    btn2: "Get it on Firefox";
  },
  {
    head: "A Simple Bookmark Manager";
    para: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.";
    img: "hero-bg.png";
    btn1: "Get it on Chrome";
    btn2: "Get it on Firefox";
  }
];

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between m-5">
      {/* {obj.map((items)=>{<><div> <img  src={".img/items.img"} alt=''/></div> <div></div></>})} */}
      {/* 
<Img img = {'.img/items.img'} />
<Heading h={items.head} />
<Para p= {items.para} />
<Button txt ={items.btn1} />
<Button txt ={items.btn2} /> */}

      {obj.map((items) => {
        <div className="flex  flex-col items-center justify-center md:w-2/4 lg:items-start">
          <Heading h={items.head} />
          <Para p={items.para} />
          <div>
            <Button txtt={items.btn1} />
            <Button txtt={items.btn2} />
          </div>
        </div>;
      })}

      {/* <div>
        <img src={"./img/hero-bg.png"} className="w-3/4 mr-4" alt="" />
      </div> */}

      {/* <div className="flex  flex-col items-center justify-center md:w-2/4 lg:items-start">
        <h1 className="text-3xl tracking-wider font-semibold mt-3">
          {" "}
          A Simple Bookmark Manager
        </h1>
        <p className="my-3">
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div>
          <button className="bg-red-400 p-3 m-3 rounded ">
            {" "}
            Get it on Chrome
          </button>
          <button className="bg-blue-500 p-3 m-3 rounded ">
            Get it on Firefox
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
