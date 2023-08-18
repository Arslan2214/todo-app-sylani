import { Input, Space } from "antd";
import React, { useState } from "react";

function Index() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const center = Math.round(window.innerWidth / 2) + "px";
  console.log(center);
  return (
    <>
      <div
        className={`absolute w-[35%] min-w-[230px] h-[35vh] min-h-[410px] top-6 left-[21%] sm:left-[29%] md:left-[37%] text-center z-30 rounded-md shadow-md py-6 px-3 bg-slate-100 `}
      >
        <div>
          <p className="text-4xl font-sans text-slate-600">Register </p>
          <p className="text-md font-sans text-slate-400 mt-1">( Your Self )</p>
        </div>
        <div className="flex flex-col mt-5 my-5 md:mt-6 space-y-2 md:space-y-0 md:flex-row gap-2 justify-center">
          <div className="w-full">
            <Input placeholder="First Name" />
          </div>
          <div className="w-full">
            <Input placeholder="Last Name" />
          </div>
        </div>
        <div className="my-3 md:my-6 mt-6 md:mt-0">
          <Input placeholder="Enter Email ..." />
        </div>
        <Space direction="horizontal" />
        <div className="my-3 md:my-6">
          <Input.Password
            placeholder="Password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </div>
        <div className="my-3 md:my-6">
          <Input.Password
            placeholder="Confirm Password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </div>
        <div className="my-3 md:my-6">
          <button className="py-2 md:py-3 px-5 md:px-7 font-semibold text-md sm:text-[16px] bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm">
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
