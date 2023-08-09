import React from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";

function index({ head, text }) {
  const colors = [
    "pink",
    "red",
    "orange",
    "amber",
    "lime",
    "green",
    "teal",
    "cyan",
    "sky",
    "violet",
    "fuchsia",
    "rose",
  ];
  const randomColor = () => {
    let ind = Math.floor(Math.random() * colors.length);
    console.log(colors[ind]);
    return colors[ind];
  };

  const bg = randomColor();
  
  
  return (
    <>
      {/* ------ Card Content ------ */}

      {/* <div
        className={`h-[400px] w-[350px] py-6 px-5 rounded-md shadow-lg bg-${bg}-300/60`}
      >
        <div className="my-2 text-start h-[10%]">
          <h3 className="text-2xl text-gray-500 font-semibold">{head}</h3>
        </div>
        <div className="overflow-auto h-[80%]">
          <p className="text-justify text-[16px] text-gray-400">{text}</p>
        </div>
      </div> */}
      <div
        data-title="Hello 1"
        className={`flex flex-col justify-center items-center cursor-pointer mx-auto sm:mx-0 h-[320px] w-[80%] sm:w-[50%] md:w-[33%] lg:w-[23%] py-6 px-5 rounded-md shadow-lg bg-gray-100/60 active:shadow-md active:bg-gray-200/40 `}
      >
        <PlusOutlined className="text-5xl text-gray-600" />
        <p className="text-xl mt-2 text-gray-500 font-semibold select-none">
          Add Task
        </p>
      </div>
    </>
  );
}

export default index;
