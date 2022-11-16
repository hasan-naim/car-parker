import React from "react";
import { Link } from "react-router-dom";

import bannerImg from "../../assets/banner/car-banner.jpg";

function Banner() {
  return (
    <div>
      <div className="">
        <div className="h-[97vh] overflow-hidden relative">
          <div className="overlay w-full h-full relative">
            <div className="bg-[#000]/70 absolute top-0 bottom-0 left-0 right-0"></div>
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
            <Link to={"/park"} className="btn btn-primary mt-3 space-x-2">
              <span>Park Your Car</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
