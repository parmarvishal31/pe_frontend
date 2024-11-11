import React, { useEffect, useState } from "react";
import Category from "./Category/Category";
import { Outlet, useNavigate } from "react-router-dom";

function Home() {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  const handleEvent = (level) => {
    setActive(level);
    const redirect = level === 1 ? "/category" : "/product";
    navigate(redirect);
  };
  return (
    <div className="m-3">
      <div className="flex gap-2 justify-center">
        <button
          className={`${
            active === 1 ? "bg-red-300" : ""
          } border-black border-2 px-10 py-2 rounded-md font-semibold`}
          onClick={() => handleEvent(1)}
        >
          Categories
        </button>
        <button
          className={`${
            active === 2 ? "bg-red-300" : ""
          } border-black border-2 px-10 py-2 rounded-md font-semibold`}
          onClick={() => handleEvent(2)}
        >
          Products
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
