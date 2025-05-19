import React from "react";
import Navbar from "../Components/Navbar";
import MYNTRA from "../assets/MYNTRA.png";
import ASHISHEVENT from "../assets/ASHISH-EVENT.png";
import ESTOREA from "../assets/ESTORE-A.png";
import PETCAREA from "../assets/PETCARE-A.png";
import WINES from "../assets/WINES.png";
import ROLEX from "../assets/ROLEX.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { TiHomeOutline } from "react-icons/ti";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const Projects = () => {
  return (
    <>
      <Navbar />

      <div role="presentation" className=" ps-1 md:ps-15 pt-5 " onClick={handleClick}>
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
            PROJECTS
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="container h-[200px] md:h-[500px]   ">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*9m-WDdL_ji01bGbjEnutEw.gif"
          className="w-full h-full"
          alt=""
        />
      </div>

      <div className="projects h-full w-full  flex flex-wrap  ">
        <div
          className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
          style={{ filter: "drop-shadow(1px 1px 20px black)" }}
        >
          <a href="https://e-commerce-by-ashish2112.netlify.app/" target="_blank">
          <img
            src={MYNTRA}
            className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer"
            alt=""
          />
          </a>
        </div>
        <div
          className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
          style={{ filter: "drop-shadow(1px 1px 20px black)" }}
        >
          <a href="https://ashish-event-planer.netlify.app/" target="_blank">
          <img
            src={ASHISHEVENT}
            className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer"
            alt=""
          />
          </a>
        </div>
        <div
          className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
          style={{ filter: "drop-shadow(1px 1px 20px black)" }}
        >
          <a href="https://ashish-rolex-clone.netlify.app/" target="_blank">
          <img
            src={ROLEX}
            className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer"
            alt=""
          />
          </a>
        </div>
        <div
          className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
          style={{ filter: "drop-shadow(1px 1px 20px black)" }}
        >
          <a href="https://ashish-petcare.netlify.app/" target="_blank">
          <img
            src={PETCAREA}
            className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer"
            alt=""
          />
          </a>
        </div>
        <div
          className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
          style={{ filter: "drop-shadow(1px 1px 20px black)" }}
        >
          <a href="https://ashish-estore.netlify.app/" target="_blank">
          <img
            src={ESTOREA}
            className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer"
            alt=""
          />
          </a>
        </div>
        <div
          className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
          style={{ filter: "drop-shadow(1px 1px 20px black)" }}
        >
          <a href="https://ashish-wines.netlify.app/" target="_blank">
          <img
            src={WINES}
            className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer"
            alt=""
          />
          </a>
        </div>
      </div>

      <div className="footer border w-full h-[2 50px]"></div>
    </>
  );
};

export default Projects;
