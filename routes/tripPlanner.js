const express = require('express');
const router = express.Router();

// Sample trip suggestions data
const tripSuggestions = {
  adventure: [
    {
      id: 1,
      title: 'Chitrakote Falls Trek',
      description: 'Experience the thrill of trekking to India\'s widest waterfall',
      activities: ['Trekking', 'Photography', 'Swimming'],
      duration: '1-2 days',
      budget: 2000,
    },
    // Add more adventure trips...
  ],
  nature: [
    {
      id: 2,
      title: 'Barnawapara Wildlife Tour',
      description: 'Explore the rich wildlife and forest trails',
      activities: ['Safari', 'Bird Watching', 'Nature Photography'],
      duration: '2-3 days',
      budget: 3000,
    },
    // Add more nature trips...
  ],
  // Add more categories...
};

// Get trip suggestions based on type
router.get('/suggestions/:type', (req, res) => {
  const { type } = req.params;
  const suggestions = tripSuggestions[type];
  
  if (!suggestions) {
    return res.status(404).json({ message: 'Trip type not found' });
  }
  
  res.json(suggestions);
});

// Get trip suggestions based on filters
router.post('/filter', (req, res) => {
  const { type, duration, budget } = req.body;
  
  let suggestions = tripSuggestions[type] || [];
  
  if (duration) {
    suggestions = suggestions.filter(trip => {
      const tripDays = parseInt(trip.duration.split('-')[1]);
      return tripDays <= parseInt(duration);
    });
  }
  
  if (budget) {
    suggestions = suggestions.filter(trip => trip.budget <= parseInt(budget));
  }
  
  res.json(suggestions);
});

module.exports = router;
