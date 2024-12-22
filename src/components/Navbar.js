import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Map as MapIcon,
  DateRange as DateRangeIcon,
  Restaurant as RestaurantIcon,
  Brush as BrushIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(2),
}));

const DrawerContainer = styled('div')(({ theme }) => ({
  width: 250,
}));

const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  flexGrow: 1,
}));

const navItems = [
  { text: 'Tourist Guide', icon: <MapIcon />, path: '/tourist-guide' },
  { text: 'Trip Planner', icon: <DateRangeIcon />, path: '/trip-planner' },
  { text: 'Local Culture', icon: <RestaurantIcon />, path: '/culture' },
  { text: 'Local Crafts', icon: <BrushIcon />, path: '/crafts' },
  { text: 'Safety', icon: <SecurityIcon />, path: '/safety' },
];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <DrawerContainer>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </DrawerContainer>
  );

  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography
            variant="h6"
            component={StyledLink}
            to="/"
          >
            Chhattisgarh Tourism
          </Typography>

          {!isMobile && (
            <div>
              {navItems.map((item) => (
                <NavButton
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  startIcon={item.icon}
                >
                  {item.text}
                </NavButton>
              ))}
            </div>
          )}
        </StyledToolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
