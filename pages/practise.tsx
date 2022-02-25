import React from "react";
import PractHeader from "./Shoes/PractHeader";
import Feature from "./Shoes/Feature";
export default function practise() {
  return (
    <div className=" bg-gray-100 ">
      <div className="container md:w-10/12 mx-auto ">
        <PractHeader />

        <main className="">
          <Feature />
          <section></section>
        </main>
      </div>
    </div>
  );
}
