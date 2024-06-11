import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
          my: 5,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}>

        <Typography variant="h4" color="#130f40">Welcome to Foodie Haven</Typography>
        <p>
          We're thrilled to have you here in our vibrant community of food enthusiasts, 
          culinary explorers, and kitchen adventurers. Whether you're a seasoned chef, a home cook, 
          or someone who simply loves to indulge in delicious food, 
          Foodie Haven is your go-to place for all things culinary.
        </p>
        <br />

        <Typography variant="h4" color="#130f40">Who We Are</Typography>
        <p>
          Foodie Haven was born out of a passion for food and a desire to create a space 
          where people from all walks of life can come together to share, learn, and celebrate 
          the joy of cooking and eating. Our team is composed of food lovers, expert chefs, nutritionists, 
          and culinary writers dedicated to bringing you the best recipes, cooking tips, 
          and food stories from around the world.
        </p>
        <br/>

        <Typography variant="h4" color="#130f40">Our Mission</Typography>
        <p>
          Our mission at Foodie Haven is to inspire and empower you to explore 
          the culinary world with confidence and creativity. We aim to provide 
          a platform where everyone, regardless of their skill level, can find 
          valuable resources, support, and inspiration to embark on their culinary journey.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
