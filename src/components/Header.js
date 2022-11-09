import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import React from "react";

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar style={{display:'flex', justifyContent:'space-between'}}>

      <Typography variant="h5">Travel Adviser</Typography>
      <Box display="flex">
      <Typography variant="h6">Explore new places</Typography>
      </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
