import React from "react";
import { Link } from "react-router-dom";
import Carts from "./carts";

function Navbar() {
  const navbar = true;
  return (
    <nav className="px-[48px] py-[8px] bg-blue-950 flex justify-between items-center">
      <Link className="flex gap-5" to="/">
        <img src="public\icon\logo.9f7e506d.svg" alt="" />
        <p className="text-3xl text-white font-[600] font-sans">products</p>
      </Link>

      <Link
        to="/carts"
        className="flex gap-3  border-1 border-blue-800 p-[8px] rounded-[10px]"
      >
        <img className="w-[24px] " src="public\images\cart.png" alt="" />
        <p className="text-blue-400 font-[700]"> My cart</p>
      </Link>
    </nav>
  );
}
export default Navbar;
