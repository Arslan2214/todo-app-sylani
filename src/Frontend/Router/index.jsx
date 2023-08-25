import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Frontend from "../index";
import Register from "../../Auth/Register_Form";
import SignIn from "../../Auth/Sign_In_Form";
import { AuthContext } from '../../App'



function Index() {
  const [isAuth] = useContext(AuthContext);
  return (
    <>
        <Routes>
          <Route path="/" element={isAuth ? <Frontend /> : <Navigate to='/login' />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={!isAuth ? <SignIn /> : <Navigate to='/' />}></Route>
          <Route path="*" element={<h2>Not Found</h2>}></Route>
        </Routes>
    </>
  );
}

export default Index;
