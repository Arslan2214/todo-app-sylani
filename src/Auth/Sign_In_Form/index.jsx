import { CloseOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React, { useState } from "react";
import { Toast } from "../../Global/Tostify";

function Index({ setShow }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const Initial = {
    email: "",
    password: "",
  }
  // Firebase Code : For Sign-In
  const [user, setUser] = useState(Initial);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    Toast({
      type: "success",
      content: "Sign In, Successfully",
    })
    console.log(user);
    setShow(false);
    setUser(Initial);
  }
  
  return (
    <div className="flex justify-center pt-[25px] w-full h-full fixed top-0 left-0">
      <div
        className={`relative w-[25%] min-w-[230px] h-[34vh] text-center z-30 rounded-md shadow-md py-6 px-3 bg-slate-100 `}
      >
        {/* Close Button */}
        <div
          className="absolute -top-1 right-2 bg-sky-400 font-semibold text-slate-50 rounded-t-sm cursor-pointer rounded-b-xl border text-lg p-1"
          onClick={() => setShow(false)}
        >
          <CloseOutlined />
        </div>
        {/* End Of Close Button */}
        <div>
          <p className="text-4xl font-sans text-slate-600">LogIn</p>
        </div>
        <div className="my-6">
          <Input onChange={handleInput} value={user.email} name="email" placeholder="Enter Email ..." />
        </div>
        <Space direction="horizontal" />
        <div className="my-6">
          <Input.Password
          onChange={handleInput}
          name="password"
          value={user.password}
            placeholder="Password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </div>
        <div className="my-6">
          <button
          onClick={handleSubmit}
          className="py-2 px-7 font-semibold text-md bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
