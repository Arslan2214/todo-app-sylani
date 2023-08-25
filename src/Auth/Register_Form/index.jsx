import { Input, Space } from "antd";
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Global/Firebase";
import { Toast, ToastContainer } from "../../Global/Tostify";

function Index() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const firstName = useRef();
  const email = useRef();
  const password = useRef();
  // Initializing User
  const Initial = {
    userId: Math.random().toString(36).slice(2),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(Initial);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    // All Empty Validation
    if (
      user.firstName.length < 1 &&
      user.email.length < 1 &&
      user.password.length < 1
    ) {
      Toast({
        type: "error",
        content: "All input fields are currently empty.",
      });
      firstName.current.focus();
      return;
    }

    // First-Name Validation
    if (user.firstName.length < 3 || !isNaN(Number(user.firstName))) {
      Toast({
        type: "error",
        content: "Name is Not Valid",
      });
      firstName.current.focus();
      return;
    }
    // Email Validation
    if (
      user.email.length < 3 ||
      !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(user.email)
    ) {
      Toast({
        type: "error",
        content: "Email is Not Valid",
      });
      email.current.focus();
      return;
    }
    // Passowrd Validation
    if (user.password.length < 6) {
      Toast({
        type: "error",
        content: "Password is Not Valid",
      });
      password.current.focus();
      return;
    }
    if (user.password !== user.confirmPassword) {
      Toast({
        type: "error",
        content: "Password & Confirm Password Not Matched",
      });
      password.current.focus();
      return;
    }

    // Firebase User Registeration
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Toast({
          type: "success",
          content: "New User Added, Successfully",
        });
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        Toast({
          type: "error",
          content: error.message,
        })
        // ..
      });


    setUser(Initial);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-[100vw]">
        <div className="w-[38%] min-w-[260px] h-[37vh] min-h-[430px] text-center z-30 rounded-md border-2 shadow-xl py-6 px-3 bg-slate-100">
          <div>
            <p className="text-4xl font-sans text-slate-600">Register </p>
            <p className="text-md font-sans text-slate-400 mt-1">
              ( Your Self )
            </p>
          </div>
          <div className="flex flex-col mt-5 my-5 md:mt-6 space-y-2 md:space-y-0 md:flex-row gap-2 justify-center">
            <div className="w-full">
              <Input
                ref={firstName}
                placeholder="First Name"
                name="firstName"
                onChange={handelChange}
                value={user.firstName}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="Last Name"
                name="lastName"
                onChange={handelChange}
                value={user.lastName}
              />
            </div>
          </div>
          <div className="my-3 md:my-6 mt-6 md:mt-0">
            <Input
              ref={email}
              placeholder="Enter Email ..."
              name="email"
              onChange={handelChange}
              value={user.email}
            />
          </div>
          <Space direction="horizontal" />
          <div className="my-3 md:my-6">
            <Input.Password
              ref={password}
              name="password"
              onChange={handelChange}
              value={user.password}
              placeholder="Password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </div>
          <div className="my-3 md:mt-4 md:mb-2">
            <Input.Password
              name="confirmPassword"
              onChange={handelChange}
              value={user.confirmPassword}
              placeholder="Confirm Password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </div>
          <p className="text-center">
            Let's{" "}
            <Link
              to="/login"
              className="text-sky-500 hover:underline cursor-pointer"
            >
              Sign In
            </Link>
          </p>
          <div className="my-3 md:my-3">
            <button
              className="py-2 md:py-3 px-5 md:px-7 font-semibold text-md sm:text-[16px] bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm"
              onClick={handelSubmit}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

export default Index;
