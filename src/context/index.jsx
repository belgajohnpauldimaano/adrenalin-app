import React, { createContext, useState } from 'react';
import feedDataJSON from './feed/data.json';
export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [ menuBarIsOpen, setMenuBarIsOpen ] = useState(false);
  const [ feedData ] = useState(feedDataJSON);
  const toggleMenu = () => {
    setMenuBarIsOpen(!menuBarIsOpen);
  }
  return (
    <AppContext.Provider
      value={{
        menuBarIsOpen, toggleMenu, feedData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}