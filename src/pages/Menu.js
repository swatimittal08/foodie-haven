import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{
          my: 5,
          textAlign: "center",
          p: 1,

          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "2rem",
            },
          },
      }}>
      </Box>
        
      <Typography variant="h6" color="#130f40" fontWeight="bold" marginLeft="27%">Where every meal is a journey, and every recipe is a story waiting to be told.
      </Typography>       
      <br />

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>

                <Typography variant="body2">{menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
