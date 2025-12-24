import React from "react";
import Container from "../Container/Container";
import plyaStore from"../../assets/google play store.png";
import appStore from "../../assets/app store.png";
import bannarImage from "../../assets/hero.png";

const HomeBannar = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <div className="pt-12">
          <h1 className="font-bold text-5xl text-center">
            We Build <br /> <span className="text [#8452EA]">Productive</span>
            Apps
          </h1>
          <p className="font-normal text-xl text-center py-5 px-3">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className='flex justify-center items-center gap-5 p-3'>
            <div  onClick={() =>
                window.open(
                  "https://play.google.com/store/apps?hl=en",
                  "_blank"
                )
              }
             className='flex justify-start items-center gap-3 border-2 border-gray-300 px-7 py-2 rounded-md shadow-sm hover:scale-105 transition ease-in-out '>
                <img className='w-8' src={plyaStore} alt="" />
                <h2 className='font-bold text-sm'>Google Play</h2>
            </div>
            <div onClick={() =>
                window.open(
                  "https://www.apple.com/app-store/",
                  "_blank"
                )
              }
             className='flex justify-start items-center gap-3 border-2 border-gray-300 px-7 py-2 rounded-md shadow-sm hover:scale-105 transition ease-in-out'>
                <img className='w-8' src={appStore} alt="" />
                <h2 className='font-bold text-sm'>App Store</h2>
            </div>
        </div>
        <div className="flex justify-center items-center px-5 mt-10">
          <img src={bannarImage} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default HomeBannar;
