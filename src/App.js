import React from 'react';
import './App.css';
import GetCards from './components/GetCards';
import RegisterCard from './components/RegisterCard';

function App() {
  return (
    <div className="wrapper">
      <h1>Business Card</h1>
      <RegisterCard />
      <GetCards />
    </div>
  );
}

export default App;
