import { useState } from 'react';
import React from "react";
import Card from "../components/Card";
import TaskForm from "../components/TaskForm";
import { Layout, theme } from "antd";
// import Register_Form from '../Auth/Register_Form'
import Navbar from "../components/Navbar/Navbar";
import { PlusOutlined } from "@ant-design/icons";

// Some Constens
const { Header, Content, Footer, Sider } = Layout;

// Starting Main body of App
const App = () => {
  const [showAddTask,  setShowAddTask] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: colorBgContainer,
        }}
        className="hidden h-screen md:block shadow-sm border"
      >
        <Navbar />
      </Sider>

      {/* <Register_Form /> */}

      <button className="absolute mt-6 block sm:hidden left-1">Text</button>
      <Layout className="site-layout ml-0 md:ml-[200px]  backdrop:blur-lg">
        <Header
          style={{
            background: colorBgContainer,
          }}
          className="sticky top-0 text-4xl select-none shadow-sm text-center pt-3 font-railway"
        >
          ToDo List
        </Header>
        <Content
          style={{
            margin: "8px 4px",
            overflow: "initial",
          }}
        >
          <div className="flex flex-wrap gap-6 bg-white p-6 md:p-8 min-h-[85vh]">
            <TaskForm show={showAddTask} setShow={setShowAddTask}  />
            {
              // Data from Firebase
              <Card
                head="Work on Sylani Assignment of Web"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut perferendis, quia expedita dolores reiciendis ad suscipit repellat atque enim, iste ut similique! Enim quidem, dicta ducimus ipsum iusto quo."
              />
            }
            {/* End Of Card  */}
            {/* Add New Task Button */}
            <div className="flex justify-center items-center h-[330px]">
              <div
                data-title="Hello 1"
                className={`flex flex-col justify-center items-center cursor-pointer aspect-square max-h-[150px] w-[180px] py-6 px-5 rounded-md shadow-lg bg-gray-100/60 active:shadow-md active:bg-gray-200/40 `}
                onClick={() => setShowAddTask(true)}
              >
                <PlusOutlined className="text-5xl text-gray-600" />
                <p className="text-xl mt-2 text-gray-500 font-semibold select-none">
                  Add Task
                </p>
              </div>
            </div>
            {/* Endong of Button */}
          </div>
        </Content>
        <Footer className="text-center font-semibold select-none text-gray-500 py-1 m-0">
          All Rights Reserved ©2022 Created by: ARslan Ahmad.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
