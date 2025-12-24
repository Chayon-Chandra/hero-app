import React from "react";
import Container from "../Container/Container";

const Trusted = () => {
  return (
    <div class="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] w-full py-16">
      <Container>
        <div>
          <h2 className="font-bold text-2xl text-white text-center">
            Trusted by Millions, Built for You
          </h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-x-8">
            <div className="text-center py-3 flex flex-col justify-between">
              <p className="font-normal text-xl text-white">Total Downloads</p>
              <h2 className="font-bold text-2xl  text-white">29.6M</h2>
              <p className="font-normal text-xl  text-white">
                21% more than last month
              </p>
            </div>
            <div className="text-center py-3 flex flex-col justify-between">
              <p className="font-normal text-xl text-white">Total Reviews</p>
              <h2 className="font-bold text-2xl  text-white">906K</h2>
              <p className="font-normal text-xl  text-white">
                46% more than last month
              </p>
            </div>
            <div className="text-center py-3 flex flex-col justify-between">
              <p className="font-normal text-xl text-white">Active Apps</p>
              <h2 className="font-bold text-2xl  text-white">132+</h2>
              <p className="font-normal text-xl  text-white">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trusted;
