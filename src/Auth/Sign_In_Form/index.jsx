import { Input, Space } from "antd";
import React, { useState } from "react";

function Index() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const center = Math.round(window.innerWidth / 2) + 'px';
  console.log(center)
  return (
    <>
      <div
        className={`absolute w-[25%] min-w-[230px] h-[34vh] top-6 left-[22%] sm:left-[30%] md:left-[40%] text-center z-30 rounded-md shadow-md py-6 px-3 bg-slate-100 `}
      >
        <div>
          <p className="text-4xl font-sans text-slate-600">LogIn</p>
        </div>
        <div className="my-6">
          <Input placeholder="Enter Email ..." />
        </div>
        <Space direction="horizontal" />
        <div className="my-6">
          <Input.Password
            placeholder="Password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </div>
        <div className="my-6">
          <button className="py-2 px-7 font-semibold text-md bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
