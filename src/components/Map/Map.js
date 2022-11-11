import React from "react";
import GoogleMapReact from "google-map-react";
import {LocationOnOutlinedIcon} from '@material-ui/icons/LocalActivityOutlined';
import { Paper, Typography, useMediaQuery } from "@mui/material";
import Rating from '@material-ui/lab/Rating';

const Map = ({coords, places, setCoords, setBounds, setChildClicked}) => {
  console.log(coords, places);
  const matches = useMediaQuery('(min-width:600px)');
  return (
    
    <div style={{ height: '85vh', width: '100%'}}>
    
      <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyCH5wfaJkF_K8O3P7qQBNq_vZsFoA9igok" }} 
      defaultCenter={coords}
      center={coords} 
      defaultZoom={11} 
      margin={[50, 50, 50, 50]}
      onChange={(e) => {
        setCoords({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }}
      options={{ disableDefaultUI: true, zoomControl: true }}
      onChildClick={(child) => setChildClicked(child)}
      >

      {places.length && places.map((place, i) => (
          <div
            style={{position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }}}            
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              // ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
             ? (<h1>loutline</h1>)
              : (
                <Paper elevation={3} style={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}>
                  <Typography variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img styley={{cursor: 'pointer'}}
                    
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}

      </GoogleMapReact>
    </div>
  );
};

export default Map;
