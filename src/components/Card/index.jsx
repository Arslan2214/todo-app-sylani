import React, {  useRef, useState } from "react";
import { EditOutlined, DeleteOutlined, EllipsisOutlined } from "@ant-design/icons";
// import { setShow } from "../TaskForm/index";

// Card Component
function Index({ head, text, date, setTodos }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menu = useRef(null)

  // Adding Side Click Close Menu Functionality
  
  const randomColor = () => {
    const colors = [
      "pink",
      "lime",
      "teal",
      "cyan",
    ];

    let ind = Math.floor(Math.random() * colors.length);
    return colors[ind];
  };

  const bg = randomColor();

  return (
    <>
      {/* ------ Card Content ------ */}

      {head && text && (
        <div
          className={`relative group h-[330px] w-[350px] sm:w-[48%] lg:w-[30%] mx-auto md:mx-0 py-5 px-5 rounded-md shadow-lg bg-${bg}-300/60`}
        >
          {/* Menu Buttons */}
          <div
            className="hidden absolute text-4xl -top-1 right-2 cursor-pointer group-hover:flex items-start justify-center"
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <EllipsisOutlined />
          </div>
          {/* Menu Text */}

          {openMenu && (
            <div
              ref={menu}
              className="absolute top-3 right-2 rounded-md bg-slate-50 w-[120px]"
            >
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
          <div className="overflow-auto h-[78%]">
            <p className="text-justify text-[16px] text-gray-400">{text}</p>
          </div>
          <div>
            <span className="flex justify-end items-center mt-2 text-gray-400 text-[12px]">
              <span className="mr-1 text-gray-600 font-semibold">
                Due Date:{" "}
              </span>
              {date}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
