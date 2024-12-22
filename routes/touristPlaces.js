const express = require('express');
const router = express.Router();

// Sample data - In a real app, this would come from a database
const touristPlaces = [
  {
    id: 1,
    name: 'Chitrakote Falls',
    location: { lat: 19.2037, lng: 81.6739 },
    description: 'India\'s widest waterfall, known as the Niagara Falls of India',
    bestTime: 'July to March',
    entryFee: 'Rs. 25 per person',
    timings: '6:00 AM to 6:00 PM',
    images: ['chitrakote1.jpg', 'chitrakote2.jpg'],
    activities: ['Sightseeing', 'Photography', 'Nature Walks'],
  },
  {
    id: 2,
    name: 'Sirpur Heritage Site',
    location: { lat: 21.3459, lng: 82.1833 },
    description: 'Ancient Buddhist site with temples and monasteries',
    bestTime: 'October to March',
    entryFee: 'Rs. 15 per person',
    timings: '8:00 AM to 5:00 PM',
    images: ['sirpur1.jpg', 'sirpur2.jpg'],
    activities: ['Historical Tours', 'Photography', 'Cultural Experience'],
  },
  // Add more places...
];

// Get all tourist places
router.get('/', (req, res) => {
  res.json(touristPlaces);
});

// Get a specific tourist place
router.get('/:id', (req, res) => {
  const place = touristPlaces.find(p => p.id === parseInt(req.params.id));
  if (!place) return res.status(404).json({ message: 'Place not found' });
  res.json(place);
});

module.exports = router;
