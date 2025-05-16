import React from "react";
import Navbar from "../Components/Navbar";
import MYNTRA from "../assets/MYNTRA.png";
import ASHISHEVENT from "../assets/ASHISH-EVENT.png";
import ESTOREA from "../assets/ESTORE-A.png";
import PETCAREA from "../assets/PETCARE-A.png";
import WINES from "../assets/WINES.png";
import ROLEX from "../assets/ROLEX.png";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="container h-[200px] md:h-[500px]   ">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*9m-WDdL_ji01bGbjEnutEw.gif"
          className="w-full h-full"
          alt=""
        />
      </div>
      
      <div className="projects h-full w-full  flex flex-wrap  ">
        <div className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
        style={{filter:"drop-shadow(1px 1px 20px black)"}}
        > 
          <img src={MYNTRA} className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer" alt="" />
        </div>
        <div className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
        style={{filter:"drop-shadow(1px 1px 20px black)"}}
        > 
          <img src={ASHISHEVENT} className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer" alt="" />
        </div>
        <div className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
        style={{filter:"drop-shadow(1px 1px 20px black)"}}
        > 
          <img src={ROLEX} className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer" alt="" />
        </div>
        <div className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
        style={{filter:"drop-shadow(1px 1px 20px black)"}}
        > 
          <img src={PETCAREA} className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer" alt="" />
        </div>
        <div className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
        style={{filter:"drop-shadow(1px 1px 20px black)"}}
        > 
          <img src={ESTOREA} className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer" alt="" />
        </div>
        <div className="img h-[350px] w-[80%] sm:h-[400px] md:h-[550px] md:w-[80%] lg:w-[50%] xl:w-[30%] xl:mx-auto lg:mx-0 mx-auto my-5  flex justify-center items-center flex-wrap"
        style={{filter:"drop-shadow(1px 1px 20px black)"}}
        > 
          <img src={WINES} className="h-[inherit] w-[inherit] md:w-[100%] cursor-pointer" alt="" />
        </div>
        
      </div>

      <div className="footer border w-full h-[2 50px]">

      </div>
    </>
  );
};

export default Projects;
