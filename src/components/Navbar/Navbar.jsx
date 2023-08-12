import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  FormOutlined,
  VideoCameraOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import React from "react";

function Navbar() {

  return (
    <>
      <nav className="py-3 px-2">
        <div>
          <div>
            <div>
              <p className="text-xl font-semibold">Menu</p>
            </div>
            {/* Search Bar */}
            <div className="flex justify-center items-center w-full border px-2 rounded-lg my-2">
              <span>
                <SearchOutlined className="text-lg mb-1 text-gray-400 cursor-pointer" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 rounded-md outline-none border-none border-r-2 border-t-2 border-b-2"
              />
            </div>
          </div>
        </div>
        <div></div>
      </nav>
    </>
  );
}

export default Navbar;
