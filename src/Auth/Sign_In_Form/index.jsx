import { Input, Space } from "antd";
import React, { useRef, useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Global/Firebase";
import { Toast } from "../../Global/Tostify";
import { AuthContext } from "../../App";
import { Link } from "react-router-dom";
import { ToastContainer } from "../../Global/Tostify";
import { UserId } from "../../App";

function Index() {
  const [userId, setUserId] = useContext(UserId);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const email = useRef(null);
  const password = useRef(null);

  const [isAuth, setIsAuth] = useContext(AuthContext);

  const Initial = {
    email: "",
    password: "",
  };
  // Firebase Code : For Sign-In
  const [user, setUser] = useState(Initial);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // All Fields Empty
    if (user.email.length < 1 && user.password.length < 1) {
      Toast({
        type: "error",
        content: "All input fields are currently empty.",
      });
      email.current.focus();
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

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const currentUser = userCredential.user;
      setUserId(currentUser.uid);
      
      Toast({
        type: "success",
        content: "Sign-in, Successfully",
      });

      setIsAuth(true);
      setUser(Initial);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      Toast({
        type: "error",
        content: "Error, During Sign-In",
      });
    }

    // Reset Input Field
  };
  // navigate to '/'

  return (
    <div className="flex justify-center items-center pt-[25px] w-screen h-screen">
      <div
        className={`relative w-[25%] min-w-[230px] h-[48vh] text-center z-30 rounded-md shadow-lg py-6 px-3 bg-slate-100 `}
      >
        {/* End Of Close Button */}
        <div>
          <p className="text-4xl font-sans text-slate-600">LogIn</p>
        </div>
        <div className="my-6">
          <Input
            onChange={handleInput}
            ref={email}
            value={user.email}
            name="email"
            placeholder="Enter Email ..."
          />
        </div>
        <Space direction="horizontal" />
        <div className="my-6">
          <Input.Password
            onChange={handleInput}
            name="password"
            ref={password}
            value={user.password}
            placeholder="Password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </div>
        <div>
          <p className="text-sm md:text-md text-slate-600 text-center select-none">
            Don't have an account?{" "}
            <Link
              className="text-sky-500 hover:underline text-semibold cursor-pointer"
              to="/register"
            >
              Register Now
            </Link>
          </p>
        </div>
        <div className="my-6">
          <button
            onClick={handleSubmit}
            className="py-2 px-7 font-semibold text-md bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm"
          >
            Log In
          </button>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Index;
