import React from 'react';
import './App.css';
import { KEY } from './config';

const api = {
  key: KEY,
  base: 'https://api.openweathermap.org/data/2.5'
};

const dateBuilder = dateItem => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  let day = days[dateItem.getDay()];
  let date = dateItem.getDate();
  let month = months[dateItem.getMonth()];
  let year = dateItem.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...' />
        </div>
        <div className='location-box'>
          <div className='location'>Tehran, Iran</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>20°C</div>
          <div className='weather'>Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
