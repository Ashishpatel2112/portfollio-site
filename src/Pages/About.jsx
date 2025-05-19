import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { TiHomeOutline } from "react-icons/ti";
import MY from "../assets/MY.jpg";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <Navbar />
      <div
        role="presentation"
        className="ps-1 md:ps-15 pt-5"
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
            ABOUT
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="section1 h-[250px] md:h-[450px] w-full mt-3 flex justify-center items-center bg-[#c5c5c5]">
        <img
          src={MY}
          className="rounded-[100%] h-[95%] w-[55%] md:w-[25%] md:h-[80%]"
          alt="my-pic"
          style={{ boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
        />
      </div>

      <div className="w-full h-[10px] bg-blue-700"></div>

      <div className="section2 w-full text-center py-5 px-5">
        <h1 className="text-2xl md:text-3xl">
          ASHISH <span className="font-bold">ADESHANA</span>
        </h1>

        {/* Paragraph with fade transition */}
        <div
          className={`mt-4 transition-all duration-1000 ease-in-out ${
            showFullText
              ? "opacity-100 max-h-[1000px]"
              : "opacity-80 max-h-[90px] overflow-hidden"
          }`}
        >
          <p className="text-lg md:px-[150px]">
            Hi! I'm a passionate Frontend Developer with a strong focus on
            building clean, responsive, and user-friendly interfaces using HTML,
            CSS, TailwindCSS, and JavaScript. I love turning ideas into visually
            appealing and functional websites that offer smooth user
            experiences. From crafting elegant layouts to writing reusable code,
            I constantly strive to improve my skills and stay up-to-date with
            the latest frontend trends. Whether it's creating pixel-perfect
            designs or optimizing performance, I enjoy every part of the
            frontend journey.
          </p>
        </div>

        <button
          onClick={toggleReadMore}
          className="mt-2 text-blue-600 font-semibold hover:underline"
        >
          {showFullText ? "Read less" : "Read more"}
        </button>
      </div>

      {/* <div className="section3 h-[80px] w-full ">
        <h1 className="font-bold ps-3 py-2">SKILLS</h1>
        <p className="line-clamp-1 ps-2">
          {" "}
          🎨 Skilled in HTML, CSS, JavaScript and modern libraries like Tailwind
          CSS and Material UI.
        </p>
      </div>

      <div className="section4 h-[400px]  w-full border">
        <div className="html flex flex-wrap justify-between py-5">
          <h1 className="ms-8 md:ms-20 font-bold">HTML</h1>
          <p className="pe-8 md:pe-20">90%</p>
          <div className="border w-[90%] mx-auto h-[15px]  bg-[#b8b8b8] rounded-3xl border-transparent overflow-hidden ">
            <img
              src="https://64.media.tumblr.com/e482d0262e89988e3fbf26f22cbacd7a/tumblr_p9qmtmwI1h1uzwgsuo1_400.gif"
              alt=""
              className="w-[90%]"
            />
          </div>
        </div>
        
        <div className="css flex flex-wrap justify-between py-5">
          <h1 className="ms-8 md:ms-20 font-bold">CSS</h1>
          <p className="pe-8 md:pe-20">95%</p>
          <div className="border w-[90%] mx-auto h-[15px]  bg-[#b8b8b8] rounded-3xl border-transparent overflow-hidden ">
            <img
              src="https://64.media.tumblr.com/e482d0262e89988e3fbf26f22cbacd7a/tumblr_p9qmtmwI1h1uzwgsuo1_400.gif"
              alt=""
              className="w-[95%]"
            />
          </div>
        </div>
      
      
        <div className="javascript flex flex-wrap justify-between py-5">
          <h1 className="ms-8 md:ms-20 font-bold">JAVASCRIPT</h1>
          <p className="pe-8 md:pe-20">70%</p>
          <div className="border w-[90%] mx-auto h-[15px]  bg-[#b8b8b8] rounded-3xl border-transparent overflow-hidden ">
            <img
              src="https://64.media.tumblr.com/e482d0262e89988e3fbf26f22cbacd7a/tumblr_p9qmtmwI1h1uzwgsuo1_400.gif"
              alt=""
              className="w-[70%]"
            />
          </div>
        </div>
       
       
       <div className="tailwind-css flex flex-wrap justify-between py-5">
          <h1 className="ms-8 md:ms-20 font-bold">TAILWIND-CSS</h1>
          <p className="pe-8 md:pe-20">90%</p>
          <div className="border w-[90%] mx-auto h-[15px]  bg-[#b8b8b8] rounded-3xl border-transparent overflow-hidden ">
            <img
              src="https://64.media.tumblr.com/e482d0262e89988e3fbf26f22cbacd7a/tumblr_p9qmtmwI1h1uzwgsuo1_400.gif"
              alt=""
              className="w-[90%]"
            />
          </div>
        </div>
        <div className="react flex flex-wrap justify-between py-5">
          <h1 className="ms-8 md:ms-20 font-bold">REACT-JS</h1>
          <p className="pe-8 md:pe-20">70%</p>
          <div className="border w-[90%] mx-auto h-[15px]  bg-[#b8b8b8] rounded-3xl border-transparent overflow-hidden ">
            <img
              src="https://64.media.tumblr.com/e482d0262e89988e3fbf26f22cbacd7a/tumblr_p9qmtmwI1h1uzwgsuo1_400.gif"
              alt=""
              className="w-[70%]"
            />
          </div>
        </div>

       
      </div> */}
    </>
  );
};

export default About;
