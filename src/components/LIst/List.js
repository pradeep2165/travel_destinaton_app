import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography, Grid } from "@mui/material";
import PlaceDetails from "../PlacesDetails/PlacesDetails";

const List = ({ type, setType, rating, setRating, isLoading, childClicked, places }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div>
      <Typography variant="h5">Food & Dining around you</Typography>
      {isLoading ? (
        <div style={{ height: "600px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl style={{ minWidth: "120px", marginBottom: "30px", marginRight:"5px" }} size="small" >            
          <Select id="type" value={type} onChange={(e) => setType(e.target.value)} >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          {/* </div> */}
          </FormControl>
          <FormControl style={{ minWidth: 120, marginBottom: "30px" }} size="small" >            
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="1">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container gap={1} style={{ height: "75vh", overflow: "auto", justifyContent: "center" }}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item >
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
