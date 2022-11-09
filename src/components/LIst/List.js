import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const List = () => {
  return (
    <div>
      <Typography variant="h4">Food & Dining around you</Typography>
      {/* <CircularProgress/> */}
      <FormControl>
        <InputLabel id="type">Type</InputLabel>
        <Select id="type">
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="rating">Rating</InputLabel>
        <Select id="rating" >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
