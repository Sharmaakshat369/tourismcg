import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TouristGuide from './pages/TouristGuide';
import TripPlanner from './pages/TripPlanner';
import LocalCulture from './pages/LocalCulture';
import LocalCrafts from './pages/LocalCrafts';
import Safety from './pages/Safety';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tourist-guide" element={<TouristGuide />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/culture" element={<LocalCulture />} />
            <Route path="/crafts" element={<LocalCrafts />} />
            <Route path="/safety" element={<Safety />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
