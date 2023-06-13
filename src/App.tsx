import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainScreen from './components/MainScreen';

export const ToggleWrapper = React.createContext({ themeChange: false, setThemeChange: (themeChange: any) => {}});
function App() {
  const [themeChange, setThemeChange] = useState(false);
  return (
    <ToggleWrapper.Provider value={{ themeChange, setThemeChange}}>
      <div className='App'>
        <NavBar />
        <MainScreen />
      </div>
    </ToggleWrapper.Provider>
  );
}

export default App;
