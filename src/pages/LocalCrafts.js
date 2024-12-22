import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
  craftInfo: {
    marginBottom: theme.spacing(4),
  },
}));

const crafts = [
  {
    name: 'Dhokra Metal Casting',
    description: 'Ancient lost-wax casting technique creating beautiful brass artifacts',
    image: '/images/crafts/dhokra.jpg',
    price: 'Rs. 500 - Rs. 5000',
    buyLink: 'https://tribes.india.gov.in',
  },
  {
    name: 'Bastar Iron Craft',
    description: 'Traditional wrought iron craft featuring tribal motifs',
    image: '/images/crafts/iron-craft.jpg',
    price: 'Rs. 1000 - Rs. 10000',
    buyLink: 'https://tribes.india.gov.in',
  },
  {
    name: 'Terracotta',
    description: 'Clay pottery and sculptures reflecting tribal life',
    image: '/images/crafts/terracotta.jpg',
    price: 'Rs. 200 - Rs. 2000',
    buyLink: 'https://tribes.india.gov.in',
  },
  {
    name: 'Bamboo Craft',
    description: 'Eco-friendly products made from locally sourced bamboo',
    image: '/images/crafts/bamboo.jpg',
    price: 'Rs. 100 - Rs. 1000',
    buyLink: 'https://tribes.india.gov.in',
  },
  {
    name: 'Bell Metal Craft',
    description: 'Traditional metal craft known for its unique sound properties',
    image: '/images/crafts/bell-metal.jpg',
    price: 'Rs. 500 - Rs. 5000',
    buyLink: 'https://tribes.india.gov.in',
  },
  {
    name: 'Tribal Paintings',
    description: 'Vibrant paintings depicting tribal life and mythology',
    image: '/images/crafts/paintings.jpg',
    price: 'Rs. 1000 - Rs. 15000',
    buyLink: 'https://tribes.india.gov.in',
  },
];

function LocalCrafts() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.craftInfo}>
        <Typography variant="h4" gutterBottom>
          Local Crafts of Chhattisgarh
        </Typography>
        <Typography variant="body1" paragraph>
          Discover the rich artistic heritage of Chhattisgarh through its traditional crafts.
          Each piece tells a story of ancient skills passed down through generations.
        </Typography>
      </div>

      <Grid container spacing={4}>
        {crafts.map((craft, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={craft.image}
                title={craft.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {craft.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {craft.description}
                </Typography>
                <Typography variant="subtitle2" color="primary">
                  Price Range: {craft.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  startIcon={<ShoppingCartIcon />}
                  href={craft.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LocalCrafts;
