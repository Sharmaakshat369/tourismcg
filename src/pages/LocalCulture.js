import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  tabContent: {
    marginTop: theme.spacing(2),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const localFood = [
  {
    name: 'Chila',
    description: 'A savory pancake made from rice batter and served with chutney',
    image: '/images/food/chila.jpg',
  },
  {
    name: 'Dubki Kadhi',
    description: 'A yogurt-based curry with pakoras, unique to Chhattisgarh',
    image: '/images/food/dubki-kadhi.jpg',
  },
  {
    name: 'Chousela',
    description: 'Flattened rice snack with peanuts and spices',
    image: '/images/food/chousela.jpg',
  },
  {
    name: 'Muthia',
    description: 'Steamed dumplings made from rice flour and vegetables',
    image: '/images/food/muthia.jpg',
  },
];

const festivals = [
  {
    name: 'Bastar Dussehra',
    description: '75-day long celebration unique to the Bastar region',
    time: 'August-October',
    image: '/images/festivals/bastar-dussehra.jpg',
  },
  {
    name: 'Madai Festival',
    description: 'Traditional tribal festival with dance and music',
    time: 'December-March',
    image: '/images/festivals/madai.jpg',
  },
  {
    name: 'Hareli',
    description: 'Agricultural festival celebrating the farming community',
    time: 'July-August',
    image: '/images/festivals/hareli.jpg',
  },
];

const phrases = [
  {
    phrase: 'Jai Johar',
    meaning: 'Traditional greeting',
    usage: 'Used to greet people respectfully',
  },
  {
    phrase: 'Barhiya',
    meaning: 'Good/Nice',
    usage: 'Used to express appreciation',
  },
  {
    phrase: 'Ka hothe',
    meaning: 'How are you?',
    usage: 'Common greeting phrase',
  },
  {
    phrase: 'Badiya',
    meaning: 'Great',
    usage: 'Used to express excellence',
  },
];

function LocalCulture() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Local Culture & Traditions
      </Typography>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Local Food" />
        <Tab label="Festivals" />
        <Tab label="Local Phrases" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          {localFood.map((food, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={food.image}
                  title={food.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {food.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {food.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>
          {festivals.map((festival, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={festival.image}
                  title={festival.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {festival.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {festival.description}
                  </Typography>
                  <Typography variant="subtitle2">
                    Time: {festival.time}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container spacing={4}>
          {phrases.map((item, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.phrase}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Meaning: {item.meaning}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Usage: {item.usage}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Container>
  );
}

export default LocalCulture;
