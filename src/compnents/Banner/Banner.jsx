import React from "react";

import bannerImg from "../../assets/banner/car-banner.jpg";

function Banner() {
  return (
    <div>
      <div className="">
        <div className="h-[97vh] overflow-hidden relative">
          <div className="overlay w-full h-full relative">
            <div className="bg-[#000]/60 absolute top-0 bottom-0 left-0 right-0"></div>
            <img
              src={bannerImg}
              className="w-full h-full bg-cover bg-center object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl lg:text-6xl font-medium">
              Park Your Beloved Car
            </h1>

            <p className="mt-3 text-sm lg:text-lg leading-6">
              Here you can park your car in online and have a record of it.
              <br />
              We carefully inspect each car and guarantee it is in good
              condition before <br></br> you take it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
