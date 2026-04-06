# WeatherX - Weather Forecast Application

A responsive, modern weather application that provides real-time weather information for any location worldwide. Built with vanilla HTML, CSS, and JavaScript, WeatherX delivers accurate weather data with an intuitive user interface.

## Features

- **Location-Based Weather Search**: Search for weather conditions in any city or location worldwide
- **Real-Time Weather Data**: Get current weather conditions powered by OpenWeatherMap API
- **Temperature Display**: View temperature in both Celsius and Fahrenheit
- **Detailed Weather Information**:
  - Weather condition and description
  - Humidity levels
  - Wind speed, direction, and gust
  - Sea level and ground level pressure
  - Minimum and maximum temperatures
  - Weather condition icons
  
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Mobile Navigation**: Hamburger menu for improved mobile experience
- **Day Display**: Shows the current day of the week
- **Error Handling**: Gracefully handles invalid location searches

## Project Structure

```
Weather App - HTML, CSS, JS/
├── index.html                 # Main HTML structure
├── CSS/
│   ├── style.css             # Main stylesheet
│   └── responsive.css        # Mobile responsive styles
├── JavaScript/
│   ├── script.js             # Main application logic
│   └── variables.js          # DOM element references
├── img/                       # Image assets
├── README.md                  # Project documentation
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: OpenWeatherMap API
- **Architecture**: Modular JavaScript with ES6 modules

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Search for a Location**: 
   - Type a city name or location in the search box
   - Press Enter or click the search button
3. **View Weather Data**: The application displays current weather information and detailed forecasts
4. **Responsive View**: The app automatically adapts to your device screen size

## Key Functionality

### Search Features
- **Search by Location**: Enter any city name
- **Input Validation**: Handles empty searches and invalid locations
- **Real-Time Results**: Fetches data immediately from the API

### Data Display
- **Primary Box**: Displays weather type, temperature, day, and description with weather icons
- **Secondary Box (Sea ForeCast)**: Shows detailed weather parameters including humidity, wind data, and pressure levels
- **Responsive Layout**: Different display formats for mobile and desktop devices

### Navigation
- **Desktop Navigation**: Standard horizontal menu bar
- **Mobile Navigation**: Hamburger menu that expands on click
- **Responsive Breakpoint**: Custom styling for devices ≤480px width

## Browser Compatibility

This application requires a modern web browser with support for:
- ES6 JavaScript modules
- Fetch API
- CSS Grid and Flexbox

Recommended browsers:
- Chrome/Edge 60+
- Firefox 54+
- Safari 10+

## API Information

This application uses the **OpenWeatherMap API** to fetch real-time weather data. 
- No API key configuration needed (key is embedded in the application)
- Provides current weather conditions, temperature, and various meteorological parameters

## Future Enhancements

Potential features for future versions:
- 5-day weather forecast
- Weather alerts and warnings
- Location history/favorites
- Theme customization (dark/light mode)
- Multiple language support
- Geolocation detection

## Author & Credits

&copy; 2023 WeatherX. All rights reserved.

---

**Note**: This is a practice project demonstrating front-end web development skills including API integration, DOM manipulation, and responsive design principles.
