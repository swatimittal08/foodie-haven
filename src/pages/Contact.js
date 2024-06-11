import React from "react";
import Layout from "./../components/Layout/Layout";
// import MailIcon from "@mui/icons-material/Mail";
import { FaEnvelope } from 'react-icons/fa'; 
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from '@mui/icons-material/Place';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box 
        sx={{ my: 10,  "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4"color="#130f40">Contact Foodie Haven</Typography>
        <p>
          Should you have any questions, Please do not hesitate to contact me.
        </p>
      </Box>

      <Box
        sx={{
          m: 3,
          width: "600px",
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}>

        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "#130f40", color: "white" }}
                  align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

              <TableRow>
                <TableCell>
                  {/* <MailIcon sx={{ color: "#130f40", pt: 1 }} /> swatemittal@gmail.com */}
                  <a href="mailto:swatemittal@gmail.com" style={{color:'#353b48' , marginLeft: '8px'}}>
                    <FaEnvelope size={15} style={{ marginRight: '10px', color:'#130f40' }} /> swatemittal@gmail.com
                  </a>
                </TableCell>
              </TableRow>

            <TableBody>
              <TableRow>
                <TableCell>
                  <PlaceIcon sx={{ color: "#130f40", pt: 1 }} /> Bengaluru, Karnataka, India
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "#130f40", pt: 1 }} /> +91-9876543210
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
