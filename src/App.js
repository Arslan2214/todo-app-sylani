import Router from './Frontend/Router';
import './App.css';
import { React, createContext, useState } from 'react';

export const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <Router />
      </AuthContext.Provider>
    </>
  );
}

export default App;
