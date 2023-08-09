import React from "react";
import { Input, Form, DatePicker } from "antd";

const { TextArea } = Input;

function index() {
    
  return (
    <>
      <div className="fixed p-20 text-center top-7 mx-auto h-[60vh] bg-gray-50 border rounded-xl z-10 w-[70%]">
        <div className="flex my-4 gap-6 w-[80%] mx-auto">
          <div className="w-[50%] ">
            <Form.Item label="Title">
              <Input placeholder="Title of Task" />
            </Form.Item>
          </div>
          <div className="w-[50%]">
            <Form.Item label="Task Date">
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
          <button className="py-3 px-8 font-semibold text-md bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm">
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}

export default index;
