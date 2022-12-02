import React from 'react';
import './App.css';
import GetCards from './components/GetCards';
import RegisterCard from './components/RegisterCard';

function App() {
  return (
    <div>
      <div className='imageBlock'>
        <img src='/Title.png' alt='Title' className='image' />
      </div>
      <div className='app'>
        <RegisterCard />
        <GetCards />
      </div>
    </div>
  );
}

export default App;
