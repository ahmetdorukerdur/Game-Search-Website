import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

export const ToggleWrapper = React.createContext({ themeChange: false, setThemeChange: (themeChange: any) => {}});
function App() {
  const [themeChange, setThemeChange] = useState(false);
  return (
    <ToggleWrapper.Provider value={{ themeChange, setThemeChange}}>
    <div className='App'>
      <NavBar />
    </div>
    </ToggleWrapper.Provider>
  );
}

export default App;
