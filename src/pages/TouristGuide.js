import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  mapContainer: {
    height: '500px',
    width: '100%',
  },
  placeInfo: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const touristPlaces = [
  {
    id: 1,
    name: 'Chitrakote Falls',
    position: { lat: 19.2037, lng: 81.6739 },
    description: 'India\'s widest waterfall, known as the Niagara Falls of India',
    bestTime: 'July to March',
    entryFee: 'Rs. 25 per person',
    timings: '6:00 AM to 6:00 PM'
  },
  {
    id: 2,
    name: 'Sirpur Heritage Site',
    position: { lat: 21.3459, lng: 82.1833 },
    description: 'Ancient Buddhist site with temples and monasteries',
    bestTime: 'October to March',
    entryFee: 'Rs. 15 per person',
    timings: '8:00 AM to 5:00 PM'
  },
  {
    id: 3,
    name: 'Barnawapara Wildlife Sanctuary',
    position: { lat: 21.4237, lng: 82.4271 },
    description: 'Home to diverse wildlife including leopards and bears',
    bestTime: 'November to June',
    entryFee: 'Rs. 150 per person',
    timings: '6:00 AM to 6:00 PM'
  }
];

function TouristGuide() {
  const classes = useStyles();
  const [selectedPlace, setSelectedPlace] = React.useState(null);

  const mapCenter = {
    lat: 21.2787,
    lng: 81.8661
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Tourist Guide
      </Typography>
      
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <div className={classes.mapContainer}>
          <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            center={mapCenter}
            zoom={7}
          >
            {touristPlaces.map((place) => (
              <Marker
                key={place.id}
                position={place.position}
                onClick={() => setSelectedPlace(place)}
              />
            ))}

            {selectedPlace && (
              <InfoWindow
                position={selectedPlace.position}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div>
                  <Typography variant="h6">{selectedPlace.name}</Typography>
                  <Typography variant="body2">{selectedPlace.description}</Typography>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </LoadScript>

      {selectedPlace && (
        <Paper className={classes.placeInfo}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">{selectedPlace.name}</Typography>
              <Typography variant="body1">{selectedPlace.description}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Best Time to Visit</Typography>
              <Typography variant="body2">{selectedPlace.bestTime}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Entry Fee</Typography>
              <Typography variant="body2">{selectedPlace.entryFee}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Timings</Typography>
              <Typography variant="body2">{selectedPlace.timings}</Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
}

export default TouristGuide;
