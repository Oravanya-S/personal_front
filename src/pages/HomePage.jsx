import React from "react";
import Carousel from "../components/Carousel";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

export default function HomePage() {
  const gallary = [
    "https://oandbprod.s3.ap-southeast-1.amazonaws.com/contents/f84afc8b-8ba3-4e55-8307-67c61eba064f.jpg",
    "https://oandbprod.s3.ap-southeast-1.amazonaws.com/contents/01a30f0f-d1d1-45a5-89e8-6432ec620f35.jpg",
  ];
  const pic = [
    "../src/assets/ad2.jpg",
    "../src/assets/ad4.jpg",
    "../src/assets/green2.jpg",
    "../src/assets/p9.jpg",
    "../src/assets/handbag.jpg",
    "../src/assets/groupBag.jpg",
  ];
  return (
    <div className="max-w-[1440px] mx-auto border z-10">
      <Carousel gallaryList={gallary}/>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-3 py-3">
        {pic.map((el, idx) => (
          <Collection
            img={el}
            textBig="AUDREY"
            textSmall="COLLECTION"
            textColor="black"
            key={idx}
          />
        ))}
      </div>
      <hr className="border-black" />
      <Footer />
    </div>
  );
}
