import React, { useState, Fragment } from 'react';
import './App.css';
import { api } from './utils/api';
import dateBuilder from './utils/databuilder';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [alert, setAlert] = useState(null);

  const search = async e => {
    try {
      if (e.key === 'Enter') {
        const res = await fetch(
          `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
        );
        const result = await res.json();
        if (result.cod === '404') {
          setAlert(result.message);
          setTimeout(() => {
            setAlert(null);
          }, 3000);
        }
        setWeather(result);
        setQuery('');
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={
        typeof weather.main !== 'undefined'
          ? weather.main.temp > 18
            ? 'app warm'
            : 'app'
          : 'app'
      }>
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main !== 'undefined' ? (
          <Fragment>
            <div className='location-box'>
              <div className='location'>
                {weather.name}, {weather.sys.country}
              </div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{Math.round(weather.main.temp)}°c</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {alert !== null ? (
              <div className='location-box'>
                <div className='location'>{alert}</div>
              </div>
            ) : (
              ''
            )}
            <div>{''}</div>
          </Fragment>
        )}
      </main>
    </div>
  );
}

export default App;
