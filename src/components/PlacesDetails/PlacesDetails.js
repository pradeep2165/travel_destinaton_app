import React from 'react'
import { Button, Card, CardActions, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
const PlacesDetails = ({ place, selected, refProp}) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <>
        <CardMedia style={{ height: 350}} 
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}/>
    
    <CardContent>
    <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} style={{margin: '5px 5px 5px 0'}}/>
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px'}}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}  
    </CardContent>
    <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>      
      
    </>
  )
}

export default PlacesDetails
