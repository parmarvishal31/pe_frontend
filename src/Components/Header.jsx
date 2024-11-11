import React from "react";
import PE from "../assets/pe.jpg";

function Header() {
  return (
    <>
      <div className="grid shadow-md grid-cols-[3fr_6fr_3fr] gap-4 md:grid md:block hidden">
        <div className="">
          <div className="flex justify-center items-center">
            <img className="p-6 h-44" src={PE} alt="Image" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p>Parmar electronics</p>
          <p>Address</p>
          <p>Contact</p>
          <p>More details</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
        </div>
      </div>

      <div className="grid mt-2 shadow-md pb-2 grid-cols-[3fr_9fr] md:hidden gap-4">
        <div className="flex h-20 w-20 justify-center items-center">
          <img className="p-1 h-16 w-16" src={PE} alt="Image" />
        </div>
        <div className="border-l-2">
          <div className="flex justify-center items-center">
            <span className="text-2xl pb-2">Parmar Electronics</span>
          </div>
          <div className="flex justify-center gap-1">
            <button className="btnM">Login</button>
            <button className="btnM">About</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
