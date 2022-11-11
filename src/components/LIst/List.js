import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography, Grid } from "@mui/material";
import PlaceDetails from "../PlacesDetails/PlacesDetails";

const List = ({ type, setType, rating, setRating, isLoading, childClicked, places }) => {
  console.log("type", type, "", rating, isLoading, places, childClicked);
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div style={{ padding: "25px" }}>
      <Typography variant="h4">Food & Dining around you</Typography>
      {isLoading ? (
        <div style={{ height: "600px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl style={{ minWidth: 120, marginBottom: "30px" }}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 120, marginBottom: "30px" }}>
            <InputLabel id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              Rating
            </InputLabel>
            <Select id="rating">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} style={{ height: "75vh", overflow: "auto" }}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
