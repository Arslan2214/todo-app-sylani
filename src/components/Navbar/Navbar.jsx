import {
  DoubleRightOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({setShow}) {
  const isAuth = false;

  const list1 = [
    { text: "Upcoming", icon: <DoubleRightOutlined /> },
    { text: "Today", icon: <UnorderedListOutlined /> },
    { text: "Todo List", icon: <MenuFoldOutlined /> },
  ];
  const collect = [
    { text: "Upcoming", ntf: 12, clr: "#6ee7b7" },
    { text: "Today", ntf: 11, clr: "#67e8f9" },
    { text: "Todo List", ntf: 3, clr: "#fda4af" },
  ];
  return (
    <>
      <nav className="flex flex-col justify-between pt-3 px-2 m-1 bg-slate-100/40 h-[98vh] rounded-lg">
        <div>
          <div>
            <div>
              <p className="text-xl font-semibold">Menu</p>
            </div>
            {/* Search Bar */}
            <div className="flex justify-center items-center w-full bg-white px-2 rounded-lg my-2">
              <span>
                <SearchOutlined className="text-lg mb-1 text-gray-400 cursor-pointer" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 bg-transparent rounded-md outline-none border-none border-r-2 border-t-2 border-b-2"
              />
            </div>
          </div>
          {/* Menu List */}
          <div className="my-4">
            <List tit="Tasks" list={list1} />
          </div>
          {/* Collection List */}
          <div>
            <Collection head="List" collect={collect} />
          </div>
          {/* Tags Division */}
          <div className="my-2">
            <h4 className="text-normal my-1 font-semibold">Tags</h4>
            {/* Tags List */}
            <div className="flex flex-wrap space-x-1 gap-1">
              <span className="py-1 px-2 rounded font-semibold bg-sky-200 text-sky-700 ">
                Tag 1
              </span>
              <span className="py-1 px-2 rounded font-semibold bg-pink-200 text-pink-700 ">
                Tag 2
              </span>
              <span className="py-1 px-2 rounded font-semibold bg-slate-200 text-slate-700 ">
                + Add Tag{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="">
          {isAuth ? (
            // Uesr Name
            <div className="flex justify-start items-center space-x-1 border px-2 py-1 rounded-full m-2">
              <div className="rounded-full flex justify-center items-center font-sans font-semibold text-slate-600 w-[35px] aspect-square bg-green-300 text-green-60">
                ARs
              </div>
              <div className="cursor-pointer flex justify-center text-slate-400 hover:text-slate-600 items-start space-x-2">
                <p className="text-[16px]">Sign out</p>{" "}
                <LogoutOutlined className="text-lg" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center space-y-1 items-center">
              <div
                className="cursor-pointer w-[70%] select-none px-4"
                onClick={() => setShow(true)}
              >
                <p className="text-center text-lg shadow hover:shadow-md active:shadow-sm text-slate-800 border rounded-md py-2 hover bg-slate-50 hover:bg-slate-200">
                  Sign In
                </p>
              </div>
              <NavLink
                to="/register"
                className="underline text-sky-700 cursor-pointer"
              >
                Regester Now
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

const List = ({ tit, list }) => {
  return (
    <>
      <div className="flex flex-col">
        <h4 className="text-normal font-semibold">{tit}</h4>
        <ul className="ms-1">
          {list.map((ele, i) => {
            return (
              <li
                key={i}
                className="w-full flex items-center space-x-2 p-1 hover:bg-slate-100 rounded-md cursor-pointer hover:text-slate-800 text-slate-400"
              >
                <div className="mb-2">{ele.icon}</div>
                <div>
                  <a className="">{ele.text}</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const Collection = ({ head, collect }) => {
  return (
    <>
      <div className="flex flex-col">
        <h4 className="text-normal font-semibold">{head}</h4>
        <ul className="ms-1">
          {collect.map((ele, i) => {
            return (
              <li
                key={i}
                className="w-full flex items-center space-x-2 p-1 hover:bg-slate-100 rounded-md cursor-pointer hover:text-slate-800 text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-3 w-[10%] aspect-square rounded-sm bg-[${ele.clr}]`}
                  ></div>
                  <div className="w-[60%]">
                    <input
                      type="text"
                      className="w-full bg-transparent outline-none border-none"
                      readOnly
                      value={ele.text}
                    />
                  </div>
                </div>
                <div className="bg-slate-100 w-[20%] text-center font-semibold rounded text-slate-600">
                  {ele.ntf}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Navbar;
