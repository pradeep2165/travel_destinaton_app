import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header";
import List from "./components/LIst/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/TravelAdviserApi";

const App = () => {
  const [type, setType] = useState("restaurants");
  const [coords, setCoords] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [rating, setRating] = useState("");
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      // getWeatherData(coords.lat, coords.lng)
      //   .then((data) => setWeatherData(data));

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
  }, [type]);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List isLoading={isLoading} childClicked={childClicked} places={filteredPlaces.length ? filteredPlaces : places} type={type} setType={setType} rating={rating} setRating={setRating} />
        </Grid>
        
        <Grid item xs={12} md={8} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Map setChildClicked={setChildClicked} setBounds={setBounds} setCoords={setCoords} coords={coords} places={filteredPlaces.length ? filteredPlaces : places} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
