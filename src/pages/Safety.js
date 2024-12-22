import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
} from '@material-ui/core';
import {
  Phone as PhoneIcon,
  LocalHospital as HospitalIcon,
  Police as PoliceIcon,
  DirectionsCar as TransportIcon,
  Info as InfoIcon,
} from '@material-ui/icons';
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
  card: {
    height: '100%',
  },
  icon: {
    color: theme.palette.primary.main,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const emergencyContacts = [
  {
    title: 'Police Emergency',
    number: '100',
    icon: <PoliceIcon />,
  },
  {
    title: 'Ambulance',
    number: '108',
    icon: <HospitalIcon />,
  },
  {
    title: 'Tourist Helpline',
    number: '1363',
    icon: <InfoIcon />,
  },
  {
    title: 'Women Helpline',
    number: '1091',
    icon: <PhoneIcon />,
  },
];

const hospitals = [
  {
    name: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'Raipur',
    contact: '0771-2572240',
  },
  {
    name: 'Dr. Bhimrao Ambedkar Memorial Hospital',
    location: 'Raipur',
    contact: '0771-2525602',
  },
  {
    name: 'District Hospital Jagdalpur',
    location: 'Jagdalpur',
    contact: '07782-229285',
  },
];

const safetyTips = [
  'Keep emergency numbers saved in your phone',
  'Always carry basic medical supplies',
  'Stay hydrated and carry water bottles',
  'Respect local customs and dress codes',
  'Keep your valuables secure',
  'Use registered tour guides and operators',
  'Avoid traveling alone at night',
  'Keep copies of important documents',
];

function Safety() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Safety Information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Emergency Contacts
            </Typography>
            <List>
              {emergencyContacts.map((contact, index) => (
                <ListItem key={index}>
                  <ListItemIcon className={classes.icon}>
                    {contact.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={contact.title}
                    secondary={contact.number}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Nearby Hospitals
            </Typography>
            <List>
              {hospitals.map((hospital, index) => (
                <ListItem key={index}>
                  <ListItemIcon className={classes.icon}>
                    <HospitalIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={hospital.name}
                    secondary={`${hospital.location} - ${hospital.contact}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Safety Tips for Tourists
            </Typography>
            <Grid container spacing={2}>
              {safetyTips.map((tip, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="body1">
                        {tip}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Transportation Safety
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <TransportIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Registered Taxi Services"
                  secondary="Use government-registered taxi services or book through your hotel"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <TransportIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Public Transport"
                  secondary="Use official bus services and maintain regular communication"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Safety;
