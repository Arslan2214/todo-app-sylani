import Router from './Frontend/Router';
import './App.css';
import { React, createContext, useState } from 'react';

export const AuthContext = createContext();
export const UserId = createContext();
export const TodosContext = createContext();
export const LoadContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <LoadContext.Provider value={[isLoading, setIsLoading]}>
        <AuthContext.Provider value={[isAuth, setIsAuth]}>
          <TodosContext.Provider value={[todos, setTodos]}>
            <UserId.Provider value={[userId, setUserId]}>
              <Router />
            </UserId.Provider>
          </TodosContext.Provider>
        </AuthContext.Provider>
      </LoadContext.Provider>
    </>
  );
}

export default App;
