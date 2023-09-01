import Router from './Frontend/Router';
import './App.css';
import { React, createContext, useState } from 'react';

export const AuthContext = createContext();
export const UserId = createContext();
export const TodosContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [userId, setUserId] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <TodosContext.Provider value={[todos, setTodos]}>
          <UserId.Provider value={[userId, setUserId]}>
            <Router />
          </UserId.Provider>
        </TodosContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
