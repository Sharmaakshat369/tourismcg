const express = require('express');
const router = express.Router();

// Sample cultural data
const culturalData = {
  food: [
    {
      id: 1,
      name: 'Chila',
      description: 'A savory pancake made from rice batter',
      image: 'chila.jpg',
      ingredients: ['Rice', 'Urad Dal', 'Spices'],
      where_to_try: ['Local restaurants in Raipur', 'Street food stalls'],
    },
    // Add more food items...
  ],
  
  festivals: [
    {
      id: 1,
      name: 'Bastar Dussehra',
      description: '75-day long celebration unique to the Bastar region',
      time: 'August-October',
      location: 'Bastar',
      highlights: ['Traditional rituals', 'Cultural performances', 'Local crafts'],
    },
    // Add more festivals...
  ],
  
  phrases: [
    {
      phrase: 'Jai Johar',
      meaning: 'Traditional greeting',
      usage: 'Used to greet people respectfully',
      pronunciation: 'jay jo-haar',
    },
    // Add more phrases...
  ],
};

// Get all cultural data
router.get('/', (req, res) => {
  res.json(culturalData);
});

// Get specific category of cultural data
router.get('/:category', (req, res) => {
  const { category } = req.params;
  const data = culturalData[category];
  
  if (!data) {
    return res.status(404).json({ message: 'Category not found' });
  }
  
  res.json(data);
});

module.exports = router;
