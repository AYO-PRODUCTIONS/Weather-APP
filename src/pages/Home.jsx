import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';

const Home = () => {
    const API_KEY = 'a8b5a299f580f800b13d7d79b9471284'; // API KEY
    const popularCities = ['Lagos', 'London', 'New York', 'Tokyo', 'Paris'];

     const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [popularWeather, setPopularWeather] = useState([]);

  const getWeatherIcon = (iconCode) =>
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const getBackgroundClass = () => {
    if (!weather) return 'from-blue-300 via-blue-200 to-blue-100';
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes('cloud')) return 'from-gray-400 via-gray-300 to-gray-200';
    if (main.includes('rain')) return 'from-blue-800 via-blue-500 to-blue-300';
    if (main.includes('clear')) return 'from-yellow-300 via-yellow-200 to-blue-100';
    if (main.includes('snow')) return 'from-white via-blue-100 to-blue-200';
    if (main.includes('thunderstorm')) return 'from-purple-800 via-purple-500 to-blue-300';
    return 'from-blue-300 via-blue-200 to-blue-100';
  };

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert(data.message);
        setWeather(null);
      }
    } catch (err) {
      alert('Failed to fetch weather.');
    }
  };

  const fetchPopularWeather = async () => {
    const promises = popularCities.map(async (city) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      return res.json();
    });

    const results = await Promise.all(promises);
    setPopularWeather(results.filter((res) => res.cod === 200));
  };

  useEffect(() => {
    fetchPopularWeather();
  }, []);

  return (
     <div className={`min-h-screen bg-gradient-to-br ${getBackgroundClass()} flex flex-col items-center p-10 font-sans transition-all duration-500`}>
     <div className='bg-yellow-100 p-8 absolute rounded-[50%] top-[55%] left-[20%] blur-lg blur-circle'></div>
      <div className='bg-yellow-100 p-8 absolute rounded-[50%] top-[35%] left-[80%] blur-lg blur-circle'></div>
      <h1 className="text-4xl font-bold mb-6 text-blue-900 drop-shadow-md">🌤 Weather Now</h1>

      <div className="flex gap-3 mb-6">
        <input
          className="p-3 rounded-lg border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={getWeather}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
        >
          Search
        </button>
      </div>

      {weather && (
        <div className="bg-yellow-100 backdrop-blur-lg shadow-xl p-10 rounded-xl text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-700">{weather.name}, {weather.sys.country}</h2>
          <div className="flex justify-center items-center gap-4">
            <img src={getWeatherIcon(weather.weather[0].icon)} alt="icon" className="w-16 h-16" />
            <div>
              <p className="text-xl capitalize">{weather.weather[0].description}</p>
              <p className="text-4xl font-bold">{weather.main.temp}°C</p>
            </div>
          </div>
        </div>
      )}

      {/* Popular Cities */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Popular Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {popularWeather.map((w, index) => (
          <div key={index} className="bg-yellow-100 backdrop-blur-lg rounded-lg p-10  shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-700">{w.name}</h3>
            <img src={getWeatherIcon(w.weather[0].icon)} alt="icon" className="mx-auto w-14 h-14" />
            <p className="capitalize">{w.weather[0].description}</p>
            <p className="text-2xl font-bold">{w.main.temp}°C</p>
            <div className="text-sm mt-2">
              <p>Humidity: {w.main.humidity}%</p>
              <p>Wind: {w.wind.speed} m/s</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home