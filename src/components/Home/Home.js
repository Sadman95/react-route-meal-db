import React from "react";
import { blueGrey } from "@mui/material/colors";
import { Box } from "@mui/system";

const Home = () => {
    const bannerTextStyle = { 
      color: blueGrey[200], 
      position: 'absolute',
      left: '50%', 
      top:'50%', 
      transform: 'translate(-50%,-50%)' };
  return (
    <Box sx={bannerTextStyle}>
      <h1>Welcome To Meal DB Reastaurant!!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dignissimos sit ea, odit eum cumque quasi saepe et corporis velit.</p>
    </Box>
  );
};

export default Home;
