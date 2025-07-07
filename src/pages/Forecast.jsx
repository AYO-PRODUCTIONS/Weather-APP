import React, { useState } from 'react';

const Forecast = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);


    const handleSearch = async () => {
  setLoading(true);
  try {
    const apiKey = 'a8b5a299f580f800b13d7d79b9471284';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    
    const res = await fetch(url);
    const data = await res.json();

    // filter to one forecast per day (e.g. 12:00)
    const filtered = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    setForecastData(filtered);
  } catch (err) {
    alert("City not found or error fetching data.");
  } finally {
    setLoading(false);
  }

  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-sky-700 mb-4">5-Day Forecast</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Forecast Display */}
      {loading && <p>Loading...</p>}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {forecastData.map((forecast, index) => (
          <div key={index} className="bg-sky-100 shadow-md rounded p-4">
           <p className="font-semibold">
            {new Date(forecast.dt_txt).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
                })}
</p>

            <p>🌡 Temp: {forecast.main.temp}°C</p>
            <p>🌥 {forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
