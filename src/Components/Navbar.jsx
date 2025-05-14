import React from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar border h-[50px] flex justify-between">
        <div className="logo  h-full w-[20%] flex items-center ">
            <img src={logo} width={70} alt="" />
        </div>
        <div className="sidebarbtn h-full w-[15%]  flex items-center justify-center">
          <HiOutlineBars3CenterLeft className=" text-4xl font-extrabold rotate-180 " />
        </div>
      </div>
    </>
  );
};

export default Navbar;
