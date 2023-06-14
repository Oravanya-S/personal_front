import React from "react";
import Carousel from "../components/Carousel";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

export default function HomePage() {
  const gallary = [
    "public/1.jpg",
    "public/2.jpg",
    "public/3.jpg",
    "public/4.jpg",
  ];
  const pic = [
    "../src/assets/green2.jpg",
    "../src/assets/p9.jpg",
    "../src/assets/handbag.jpg",
    "../src/assets/groupBag.jpg",
  ];
  return (
    <div className="max-w-[1440px] mx-auto border">
      <Carousel gallaryList={gallary}/>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-3 py-3">
        {pic.map((el, idx) => (
          <Collection
            img={el}
            // textBig="AUDREY"
            // textSmall="COLLECTION"
            // textColor="black"
            key={idx}
          />
        ))}
      </div>
      <hr className="border-black" />
      <Footer />
    </div>
  );
}
