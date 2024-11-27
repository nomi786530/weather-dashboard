import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';
import './App.css';
import Navbar from './components/Navbar';



function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);



  const handleSearch = async (city) => {
    const apiKey = 'f30f514cd0bc3ddef04c4aab9c5c7db7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    setLoading(true); // Start loading
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        setWeatherData(data);
        setError('');
      } else {
        setError(data.message);
        setWeatherData(null);
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false); // Stop loading
    }
    if (response.ok) {
      setRecentSearches((prev) => {
        const updated = [city, ...prev];
        return updated.slice(0, 5); // Keep the last 5 searches
      });
    }
  };
  
  

  return (
    <div className="App">
      <Navbar />
      <h2>Your Gateway to Live Weather Insights</h2>
      <p className="subheading">Stay informed. Stay prepared. Anywhere, anytime.</p>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}

      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
  
}

export default App;
