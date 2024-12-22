# Chhattisgarh Tourism Platform

A web application to promote tourism in Chhattisgarh by helping tourists discover places, plan trips, and learn about the local culture.

## Features

- Interactive Tourist Guide with Google Maps integration
- Trip Planner with customized suggestions
- Local Food and Culture information
- Easy Bookings through external platforms
- Safety Information and Emergency Contacts
- Local Crafts Showcase

## Tech Stack

- Frontend: React.js with Material-UI
- Backend: Node.js with Express
- Database: MongoDB
- Maps: Google Maps API

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```

3. Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=your_mongodb_uri
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the development server:
   ```bash
   # In the root directory
   npm run dev
   ```

## Project Structure

- `/client` - React frontend
- `/routes` - Express route handlers
- `/models` - MongoDB schemas
- `/public` - Static assets

## Contributing

Feel free to submit issues and enhancement requests.
