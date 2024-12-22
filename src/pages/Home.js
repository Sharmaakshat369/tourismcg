import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundImage: 'url("/images/chitrakote-falls.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();

  const features = [
    {
      title: 'Tourist Guide',
      description: 'Explore popular destinations with our interactive map',
      image: '/images/tourist-guide.jpg',
      link: '/tourist-guide'
    },
    {
      title: 'Trip Planner',
      description: 'Plan your perfect trip with customized itineraries',
      image: '/images/trip-planner.jpg',
      link: '/trip-planner'
    },
    {
      title: 'Local Culture',
      description: 'Discover the rich culture and traditions of Chhattisgarh',
      image: '/images/culture.jpg',
      link: '/culture'
    },
    {
      title: 'Local Crafts',
      description: 'Explore traditional arts and crafts',
      image: '/images/crafts.jpg',
      link: '/crafts'
    }
  ];

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Welcome to Chhattisgarh
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Discover the heart of incredible India
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item key={feature.title} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={feature.image}
                  title={feature.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
                <Button 
                  component={Link} 
                  to={feature.link}
                  color="primary"
                  fullWidth
                >
                  Explore
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
