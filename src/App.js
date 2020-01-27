import React from 'react';
import './App.css';
import { KEY } from './config';

const api = {
  key: KEY,
  base: 'https://api.openweathermap.org/data/2.5'
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...' />
        </div>
      </main>
    </div>
  );
}

export default App;
