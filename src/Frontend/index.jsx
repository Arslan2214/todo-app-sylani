import React from "react";
import Card from "../components/Card";
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
        className="hidden sm:block"
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
          className="sticky top-0 text-4xl shadow-sm text-center pt-3 font-railway"
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
          <div
            style={{
              textAlign: "center",
            }}
            className="bg-white p-6 md:p-[14px] min-h-[85vh]"
          >
            <Card
              head="Social Works"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            vel, modi laudantium ratione consequatur impedit quo ipsa cum
            blanditiis officia assumenda quod adipisci eos nulla ullam
            accusamus, eveniet expedita praesentium rem iste vitae ad! Maiores,
            laboriosam incidunt non reprehenderit quo odio accusantium nam
            reiciendis quae temporibus obcaecati eos tempore. Omnis."
            />
          </div>
        </Content>
        <Footer className="text-center font-semibold text-gray-500 py-1 m-0">
          All Rights Reserved ©2022 Created by: ARslan Ahmad.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
