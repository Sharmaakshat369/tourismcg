import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  suggestionCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

const tripTypes = [
  { value: 'adventure', label: 'Adventure' },
  { value: 'nature', label: 'Nature' },
  { value: 'culture', label: 'Culture' },
  { value: 'spiritual', label: 'Spiritual' },
];

const suggestions = {
  adventure: [
    {
      title: 'Chitrakote Falls Trek',
      description: 'Experience the thrill of trekking to India\'s widest waterfall',
      activities: ['Trekking', 'Photography', 'Swimming'],
      duration: '1-2 days',
      image: '/images/chitrakote-trek.jpg',
    },
    {
      title: 'Tirathgarh Waterfall Adventure',
      description: 'Multi-tiered waterfall perfect for adventure enthusiasts',
      activities: ['Rock Climbing', 'Rappelling', 'Nature Walk'],
      duration: '1 day',
      image: '/images/tirathgarh.jpg',
    },
  ],
  nature: [
    {
      title: 'Barnawapara Wildlife Tour',
      description: 'Explore the rich wildlife and forest trails',
      activities: ['Safari', 'Bird Watching', 'Nature Photography'],
      duration: '2-3 days',
      image: '/images/barnawapara.jpg',
    },
    {
      title: 'Kanger Valley National Park',
      description: 'Discover unique cave formations and biodiversity',
      activities: ['Cave Exploration', 'Wildlife Spotting', 'Hiking'],
      duration: '2-3 days',
      image: '/images/kanger-valley.jpg',
    },
  ],
  culture: [
    {
      title: 'Sirpur Heritage Trail',
      description: 'Ancient Buddhist and Hindu archaeological sites',
      activities: ['Temple Visits', 'Historical Tours', 'Cultural Programs'],
      duration: '1-2 days',
      image: '/images/sirpur.jpg',
    },
    {
      title: 'Bastar Tribal Experience',
      description: 'Immerse in tribal culture and traditions',
      activities: ['Village Visits', 'Traditional Dance', 'Craft Workshops'],
      duration: '2-3 days',
      image: '/images/bastar.jpg',
    },
  ],
  spiritual: [
    {
      title: 'Danteshwari Temple Pilgrimage',
      description: 'Visit the sacred temple of Goddess Danteshwari',
      activities: ['Temple Prayers', 'Meditation', 'Religious Ceremonies'],
      duration: '1-2 days',
      image: '/images/danteshwari.jpg',
    },
    {
      title: 'Bhoramdeo Temple Complex',
      description: 'Explore the Khajuraho of Chhattisgarh',
      activities: ['Temple Architecture', 'Spiritual Sessions', 'Historical Tours'],
      duration: '1-2 days',
      image: '/images/bhoramdeo.jpg',
    },
  ],
};

function TripPlanner() {
  const classes = useStyles();
  const [tripType, setTripType] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(true);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Plan Your Trip
      </Typography>

      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                select
                fullWidth
                label="Type of Trip"
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className={classes.formControl}
              >
                {tripTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Duration (days)"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className={classes.formControl}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Budget (₹)"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={classes.formControl}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Get Suggestions
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {showSuggestions && tripType && suggestions[tripType] && (
        <>
          <Typography variant="h5" gutterBottom>
            Suggested Itineraries
          </Typography>
          <Grid container spacing={4}>
            {suggestions[tripType].map((suggestion, index) => (
              <Grid item key={index} xs={12} md={6}>
                <Card className={classes.suggestionCard}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={suggestion.image}
                    title={suggestion.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {suggestion.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {suggestion.description}
                    </Typography>
                    <Typography variant="subtitle2">
                      Activities:
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {suggestion.activities.join(', ')}
                    </Typography>
                    <Typography variant="subtitle2">
                      Recommended Duration: {suggestion.duration}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default TripPlanner;
