import React from "react";
import Navbar from "../Components/Navbar";
import "../App.css";
import IMAGE from "../assets/IMAGE.png";
import { Link } from "react-router-dom";
import CSS from "../Components/CSS";
import HTMl from "../Components/HTML";
import JS from "../Components/JS";
import TAILWINDCSS from "../Components/TAILWIND-CSS";
import REACT from "../Components/REACT";
import SEO from "../Components/SEO";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import EVENT from "../assets/EVENT.png";
import ESTORE from "../assets/ESTORE.png";
import PETCARE from "../assets/PETCARE.png";
import { Box } from "@mui/material";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";

const Dashboard = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <>
      <Navbar />
      <div className="one  h-[600px]  w-full  bg-[#000000]">
        <div className="h-[40%] md:h-[50%] w-full  flex justify-center items-end ">
          <div
            className="img  h-[70%] w-[40%] sm:w-[40%] sm:h-[90%] md:h-[90%] md:w-[29%] rounded-[100%] md:rounded-[50%]  flex justify-center items-center "
            style={{
              background:
                "linear-gradient(130deg,rgba(247, 125, 105, 1) 37%, rgba(162, 35, 212, 1) 80%)",
            }}
          >
            <img
              src={IMAGE}
              alt=""
              className=" w-[90%] mb-8 me-5 md:w-[90%] lg:w-[65%] sm:w-[60%]"
            />
          </div>
        </div>
        <div className="h-[15%] mt-5 w-full   text-white flex justify-center items-center text-center py-auto">
          <h3
            className="text-3xl font-bold  "
            style={{
              textShadow: "0px 0px 5px red",
            }}
          >
            I do code and <br />
            make content{" "}
            <span
              className="bg-gradient-to-tr from-indigo-900 via-purple-500 via-pink-500 via-pink-400 to-pink-600 bg-clip-text text-transparent  "
              style={{
                textShadow: "none",
              }}
            >
              {" "}
              about it!{" "}
            </span>{" "}
          </h3>
        </div>
        <div className="h-[20%] w-full   lg:h-[15%]  flex justify-center items-center ">
          <p className="text-gray-400 text-center px-5 ">
            I am a seasoned Frontend developer with over 3 month's of
            professional experience, specializing in Web Designing using
            HTML,CSS,JAVASCRIPT and TAILWIND-CSS. My expertise lies in crafting
            robust and scalable architectures on the platform.
          </p>
        </div>
        <div className="h-[15%] w-full flex justify-center items-center ">
          <Link to="/contact" className="text-white font-bold ">
            <button className="button-62 " role="button">
              Get In Touch
            </button>
          </Link>

          <a href="CV.pdf" download="ASHISH-ADESHANA-CV.pdf">
            <button className="button-62 ms-5" role="button">
              Downlod CV
            </button>
          </a>
        </div>
      </div>
      <div className="subheader bg-[#262626]">
        <h2
          className="text-center font-bold text-3xl text-white py-3"
          style={{
            textShadow: "1px 1px 5px red",
          }}
        >
          Experience With{" "}
        </h2>
      </div>

      <div className="section2 h-auto py-3 w-full bg-[#262626] flex flex-wrap justify-evenly">
        <HTMl />
        <CSS />
        <JS />
        <TAILWINDCSS />
        <REACT />
        <SEO />
      </div>

      <div className="projectheader py-3 text-center text-2xl font-bold bg-[#c4c4c4] ">
        <h3 style={{ textShadow: "1px 1px 5px red" }}>PROJECTS</h3>
      </div>

      <div className="projects h-auto flex flex-wrap justify-evenly items-center bg-[#c4c4c4]">
        <Card
          sx={{ maxWidth: 300 }}
          style={{ boxShadow: "0px 0px 25px grey", marginBlock: "25px" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="10"
              image={EVENT}
              alt="ashish-event-planner"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ashish-event-planner
              </Typography>
              <Typography
                variant="body2"
                className=" line-clamp-3 overflow-scroll"
                sx={{ color: "text.secondary" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente dolorem cumque sequi molestiae qui dignissimos nisi
                error doloribus, exercitationem eum cupiditate repellendus,
                mollitia quo deserunt saepe magni aliquid quia adipisci.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              onClick={() =>
                window.open(
                  "https://ashish-event-planer.netlify.app/",
                  "_blank"
                )
              }
            >
              <Button size="small" color="primary">
                Preview
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card
          sx={{ maxWidth: 300 }}
          style={{ boxShadow: "0px 0px 25px grey", marginBlock: "25px" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="10"
              image={ESTORE}
              alt="ashish-event-planner"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ashish-estore
              </Typography>
              <Typography
                variant="body2"
                className=" line-clamp-3 overflow-scroll"
                sx={{ color: "text.secondary" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente dolorem cumque sequi molestiae qui dignissimos nisi
                error doloribus, exercitationem eum cupiditate repellendus,
                mollitia quo deserunt saepe magni aliquid quia adipisci.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              onClick={() =>
                window.open("https://ashish-estore.netlify.app/", "_blank")
              }
            >
              <Button size="small" color="primary">
                Preview
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card
          sx={{ maxWidth: 300 }}
          style={{ boxShadow: "0px 0px 25px grey", marginBlock: "25px" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="10"
              image={PETCARE}
              alt="ashish-petcare"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ashish-petcare
              </Typography>
              <Typography
                variant="body2"
                className=" line-clamp-3 overflow-scroll"
                sx={{ color: "text.secondary" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente dolorem cumque sequi molestiae qui dignissimos nisi
                error doloribus, exercitationem eum cupiditate repellendus,
                mollitia quo deserunt saepe magni aliquid quia adipisci.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              onClick={() =>
                window.open("https://ashish-petcare.netlify.app/", "_blank")
              }
            >
              <Button size="small" color="primary">
                Preview
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>

      <div className="h-auto w-full bg-[black] ">
        <h3
          className="text-center text-3xl font-bold text-white py-2  "
          style={{
            background:
              "linear-gradient(0deg, rgba(105, 167, 247, 1) 10%, rgba(35, 67, 212, 1) 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "35px",
            fontWeight: "bold",
          }}
        >
          EXPERIENCE
        </h3>
      </div>
      <div className="bg-[black] h-auto shadow-2xl shadow-white ">
        <div className=" w-[60%] mx-auto py-3  h-[90%]">
          <div className="one h-[30%] w-full  flex ">
            <div className="sub  h-full w-[80%]">
              <h3 className="font-bold text-lg text-white ps-5">CODE PRAISE</h3>
            </div>
            <div className="sub  h-full w-[20%]">
              <p className="text-[#8491a0] text-sm text-end pe-2">
                Feb 2025 - June 2025
              </p>
            </div>
          </div>
          <div className="one h-[70%] w-full   ">
            <p className="text-sm text-[#c4c4c4] py-1 px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur saepe sequi nesciunt a numquam laboriosam aliquam,
              corrupti sunt, labore rerum nostrum sapiente quae, harum
              voluptatibus eius ducimus. Iure, molestias facere! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eligendi aut eius
              nemo asperiores quam aliquam architecto nihil provident porro
              saepe. Ut culpa facilis quisquam autem consequuntur aperiam ipsum,
              dolores debitis?{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black py-5 ">
        <div className=" h-[150px]  w-[70%] mx-auto text-white flex flex-col justify-evenly">
          <h3 className="font-bold text-lg">CONTACT</h3>
          <p className="text-[#c4c4c4]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim velit
            quam asperiores voluptate voluptas necessitatibus cum culpa, eius
            explicabo alias tempore accusamus ea quibusdam impedit accusantium
            est autem exercitationem minima!
          </p>
          <p className="flex"> 📬 patelaashish31154@gmail.com </p>
          <div className="flex space-x-2">
            <FaInstagram className="cursor-pointer text-[#c4c4c4]" />
            <BsTwitterX className="cursor-pointer text-[#c4c4c4]" />
            <LuGithub className="cursor-pointer text-[#c4c4c4]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
