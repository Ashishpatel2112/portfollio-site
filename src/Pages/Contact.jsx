import React from "react";
import Navbar from "../Components/Navbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        role="presentation"
        className=" ps-2 md:ps-15 pt-5 "
        onClick={handleClick}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className="flex items-center hover:underline">
            <TiHomeOutline />
            HOME
          </Link>
          <Typography
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
            }}
          >
            CONTACT
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="section1  h-auto  w-full text-center flex flex-col justify-evenly">
        <h3 className="font-bold text-3xl py-3 ">LET'S CHAT!</h3>
        <p className="pb-3">We Would Love to learn about your project </p>
        <div className=" h-[120px] w-full flex justify-evenly">
          <div className="border h-full w-[33%] text-center flex flex-col justify-center">
            <MdOutlinePhoneAndroid className=" font-bold text-2xl mx-auto " />
            <h3>Call us at!</h3>
            <p className="text-gray-500">+91 90541 22677</p>
          </div>
          <div className="border h-full w-[33%] flex flex-col justify-center">
            <IoLocationSharp className="font-bold text-2xl mx-auto" />
            <p className="text-gray-500">Surat-Gujarat</p>
          </div>
          <div className="border h-full w-[33%] flex flex-col justify-center ">
            <IoIosMail className="font-bold text-2xl mx-auto" />
            <p className="text-gray-500 overflow-auto ">
              patelaashish31154@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-[600px] sm:h-[750px] w-full bg-[#cecccc] flex flex-col items-center">
        <h3 className="text-3xl py-5 ">Send a message !</h3>
        <form
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          }}
          action=""
          className="w-[70%] h-[70%]  rounded-4xl flex flex-col items-center justify-evenly"
        >
          <TextField
            label="YOUR NAME"
            className=" font-bold bg-[#ffff] w-[80%] "
          />
          <TextField
            label="YOUR EMAIL ADDRESS"
            className=" font-bold bg-[#ffff] w-[80%] "
          />
          <TextField
            label="YOUR PHONE NO."
            className=" font-bold bg-[#ffff] w-[80%]"
          />
          <TextField
            label="YOUR MESSAGE"
            className=" font-bold bg-[#ffff] w-[80%] "
          />
          <button className="font-bold text-xl underline hover:no-underline hover:text-blue-800">
            SEND
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
