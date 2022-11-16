import React from "react";

function Footer() {
  return (
    <footer className="my-12 ">
      <div className="container flex justify-center text-center">
        <div>
          <div className="bg-gray-500 w-[200px] h-[6px] rounded-lg mx-auto mb-3"></div>
          <h4 className="font-bold">
            Copyright © 2022 Hasan Naim All rights reserved.
          </h4>
          <h4 className="font-bold">Contact: hasannaim6246@gmail.com</h4>
          <div className="space-x-3">
            <a
              rel="noreferrer"
              href="https://github.com/hasan-naim"
              target={"_blank"}
              className=" text-blue-700 hover:text-blue-800 hover:underline text-lg font-medium"
            >
              Github
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/HasanNaim20"
              target={"_blank"}
              className=" text-blue-700 hover:text-blue-800 hover:underline text-lg font-medium"
            >
              Twitter
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/hasannaim/"
              target={"_blank"}
              className=" text-blue-700 hover:text-blue-800 hover:underline text-lg font-medium"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
