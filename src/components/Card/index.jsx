import React, { useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { setShow } from "../TaskForm/index";

// Card Component
function Index({ head, text }) {
  const [openMenu, setOpenMenu] = useState(false);
  const randomColor = () => {
    const colors = [
      "blue",
      "pink",
      "red",
      "yellow",
      "orange",
      "lime",
      "green",
      "teal",
      "cyan",
      "sky",
      "violet",
      "fuchsia",
    ];

    let ind = Math.floor(Math.random() * colors.length);
    console.log('Card color =>', colors[ind])
    return colors[ind];
  };

  const bg = randomColor();

  return (
    <>
      {/* ------ Card Content ------ */}

      {head && text && (
        <div
          className={`relative group h-[330px] w-[350px] mx-auto md:mx-0 py-5 px-5 rounded-md shadow-lg bg-${bg}-300/60`}
        >
          {/* Menu Buttons */}
          <div
            className="hidden absolute top-3 right-3 cursor-pointer group-hover:flex items-start justify-center"
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <div className="w-[1px] mx-[1.5px] h-[1px] rounded-full shadow-lg p-[3px] bg-slate-500/70">
              {" "}
            </div>
            <div className="w-[1px] mx-[1.5px] h-[1px] rounded-full shadow-lg p-[3px] bg-slate-500/70">
              {" "}
            </div>
            <div className="w-[1px] mx-[1.5px] h-[1px] rounded-full shadow-lg p-[3px] bg-slate-500/70">
              {" "}
            </div>
          </div>
          {/* Menu Text */}

          {openMenu && (
            <div className="absolute top-3 right-2 rounded-md bg-slate-50 w-[120px]">
              <ul>
                <li
                  className="flex space-x-2 items-center text-slate-400 px-2 py-1 w-full h-[50%] cursor-pointer hover:text-slate-600 hover:rounded-t-md"
                  onClick={() => setOpenMenu(false)}
                >
                  <span className="mb-2">
                    <EditOutlined className="" />
                  </span>{" "}
                  <span>Edit</span>
                </li>
                <li
                  className="flex space-x-2 items-center text-slate-400 px-2 py-1 w-full h-[50%] cursor-pointer hover:text-slate-600 hover:rounded-b-md"
                  onClick={() => setOpenMenu(false)}
                >
                  <span className="mb-2">
                    <DeleteOutlined />
                  </span>{" "}
                  <span>Delete</span>
                </li>
              </ul>
            </div>
          )}

          {/* Main Text */}
          <div className="my-2 text-start">
            <h3 className="text-2xl text-gray-500 font-semibold">{head}</h3>
          </div>
          <div className="overflow-auto h-[80%]">
            <p className="text-justify text-[16px] text-gray-400">{text}</p>
          </div>
        </div>
      )}

      <div
        data-title="Hello 1"
        className={`flex flex-col justify-center items-center cursor-pointer mx-auto mt-1 sm:mx-0 h-[320px] w-[80%] sm:w-[50%] md:w-[33%] lg:w-[23%] py-6 px-5 rounded-md shadow-lg bg-gray-100/60 active:shadow-md active:bg-gray-200/40 `}
        // onClick={setShow(prev => !prev)}
      >
        <PlusOutlined className="text-5xl text-gray-600" />
        <p className="text-xl mt-2 text-gray-500 font-semibold select-none">
          Add Task
        </p>
      </div>
    </>
  );
}

export default Index;
