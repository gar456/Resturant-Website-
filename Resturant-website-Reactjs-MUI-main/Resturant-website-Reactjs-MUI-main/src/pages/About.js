import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
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
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
        we believe that food is more than just sustenance; it’s an art form. Our chefs pour their passion into every dish, using only the freshest ingredients to craft meals that delight the senses. Whether you’re in the mood for a comforting classic or an adventurous new flavor, our menu has something to satisfy every palate.
        </p>
        <br />
        <p>
        We’ve created a space where friends and family can come together to enjoy good food, great company, and unforgettable moments. Whether you’re celebrating a special occasion, enjoying a casual night out, or simply craving a delicious meal, we’re here to make your visit special.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
