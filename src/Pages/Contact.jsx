import React from "react";
import Navbar from "../Components/Navbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { TiHomeOutline } from "react-icons/ti";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Contact = () => {
  return (
    <>
      <Navbar />
      <div role="presentation" className=" ps-2 md:ps-15 pt-5 " onClick={handleClick}>
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
     
    </>
  );
};

export default Contact;
