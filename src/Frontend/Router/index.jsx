import React from "react";
import { Route, Routes } from "react-router-dom";
import Frontend from '../index'
import Register from '../../Auth/Register_Form'

function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontend />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default index;
