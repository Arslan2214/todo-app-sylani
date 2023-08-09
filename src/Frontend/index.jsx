import React from "react";
import Card from "../components/Card";
import TaskForm from "../components/TaskForm";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  FormOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

// Some Constens
const { Header, Content, Footer, Sider } = Layout;
const items = [
  FormOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

// Starting Main body of App
const App = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: colorBgContainer,
        }}
        className="hidden md:block"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      {/* <button className="absolute mt-6 right-1">Text</button> */}
      <Layout className="site-layout ml-0 md:ml-[200px]">
        <Header
          style={{
            background: colorBgContainer,
          }}
          className="sticky top-0 text-4xl select-none shadow-sm text-center pt-3 font-railway"
        >
          {" "}
          ToDo List{" "}
        </Header>
        <Content
          style={{
            margin: "8px 4px",
            overflow: "initial",
          }}
        >
          <div className="flex flex-wrap gap-6 bg-white p-6 md:p-8 min-h-[85vh]">
            {
              // Data from Firebase
              <TaskForm />
            }
            <Card />
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
