import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Phoneinfo() {
  const { state } = useLocation();
  const { data } = state || {};
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-[50px] text-black my-[50px] font-[900]">
        {data.showName}
      </h1>
      <div className=" flex gap-[50px] mb-[50px]">
        <img className="w-[500px]" src={data.pictureLink} alt="" />
        <div className="flex flex-col gap-2">
          <h2 className="text-[50px] text-black font-[500]">
            Model: {data.showName}
          </h2>
          <h3 className="text-[30px] text-black font-[400]">
            Made: {data.showName}
          </h3>
          <h4 className="text-[30px] text-blue-400 font-[400]">
            price: {data.numberPrice} som
          </h4>
          <p className="text-[25px] w-[600px] text-gray-600 font-[400]">
            {data.information}
          </p>
          <div className="flex gap-[30px] mt-[30px]">
            <Link to="/">
              <button className="px-[25px] py-[10px] bg-blue-400 text-[20px] text-white rounded-[10px]">
                BACK TO PRADUCT
              </button>
            </Link>

            <button
              onClick={() => navigate("/carts", { state: { data: data } })}
              disabled={data.isAddedToCart ? true : false}
              className="px-[25px] py-[10px] bg-orange-400 text-[20px] text-white rounded-[10px]"
            >
              {data.isAddedToCart ? "HAVE CART" : "ADD CART"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phoneinfo;
