import React, { useState } from "react";
import { Input, Form, DatePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Index = ({ show, setShow }) => {
  // setShow(true);
  return (
    <div className="absolute top-0 left-0 flex justify-center w-screen">
      <dialog
        className={`relative p-2 
        ${show ? "block" : "hidden"}
         sm:p-5 lg:p-8 text-center h-[60vh] lg:h-[55vh] bg-gray-50 border rounded-xl z-10 min-w-[250px] w-[30%]`}
      >
        {/* Close Button */}
        <div
          className="absolute -top-1 right-2 bg-sky-400 font-semibold text-slate-50 rounded-t-sm cursor-pointer rounded-b-xl border text-lg p-1"
          onClick={() => setShow(false)}
        >
          <CloseOutlined />
        </div>
        {/* End Of Close Button */}
        <div className="my-4 space-y-3 lg:space-y-6 w-[80%] mx-auto">
          <div className="w-full text-center">
            <Input placeholder="Title of Task" />
          </div>
          <div className="w-full">
            <Form.Item
              className="text-mono text-semibold "
              label="Task Completion Date"
            >
              <DatePicker />
            </Form.Item>
          </div>
        </div>
        <div className="text-center my-3">
          <textarea
            className="p-2 resize-none bg-white shadow outline-none border-none text-gray-400 h-[120px]  w-[80%]"
            placeholder="Enter Text ..."
            name="text"
          ></textarea>
        </div>
        <div className="text-center my-3">
          <button
            className="py-3 px-8 font-semibold text-md bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm"
            onClick={() => {
              console.log("Add Task Clicked");
              setShow(false);
            }}
          >
            Add Task
          </button>
        </div>
      </dialog>
    </div>
  );
};

// export const useShow = () => setShow((pre) => !pre);

export default Index;
// export default index;
