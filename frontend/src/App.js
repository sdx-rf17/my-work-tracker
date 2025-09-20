import React, { useState } from 'react';
import DailyWorkList from './components/DailyWorkList';
import AddDailyWorkForm from './components/AddDailyWorkForm';
import './style.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="hero">
        <h1>🛠️ My Work Tracker</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="container">
        <AddDailyWorkForm />
        <DailyWorkList />
      </div>
    </div>
  );
}

export default App;
