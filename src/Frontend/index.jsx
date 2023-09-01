import { useContext, useEffect, useState } from "react";
import React from "react";
import Card from "../components/Card";
import TaskForm from "../components/TaskForm";
import { Layout, theme } from "antd";
import Loader from '../components/Loader'
import Navbar from "../components/Navbar/Navbar";
import { MenuOutlined, PlusOutlined } from "@ant-design/icons";
import Sign_In_Form from "../Auth/Sign_In_Form";
import { ToastContainer } from "react-toastify";
import { collection, getDocs } from "firebase/firestore"; // Import Firebase-Data
import { db } from "../Global/Firebase";
import { TodosContext, UserId, LoadContext } from "../App";


// Some Constens
const { Header, Content, Footer, Sider } = Layout;

// Starting Main body of App
const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [todos, setTodos] = useContext(TodosContext);
  const [isLoading, setIsLoading] = useContext(LoadContext);
  const [userId] = useContext(UserId);
  const [firebaseTodos, setFirebaseTodos] = useState([]);
  const [firebaseData, setFirebaseData] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getData = async () => {
    const firebase_data = await getDocs(collection(db, "todo"));

    setFirebaseData(
      firebase_data.docs.map((todo) => {
        return {
          todo_Id:
            todo._document.data.value.mapValue.fields.todo_Id.stringValue,
          bg: todo._document.data.value.mapValue.fields.bg.stringValue,
          title: todo._document.data.value.mapValue.fields.title.stringValue,
          user_Id:
            todo._document.data.value.mapValue.fields.user_Id.stringValue,
          text: todo._document.data.value.mapValue.fields.text.stringValue,
          todo_date:
            todo._document.data.value.mapValue.fields.todo_date.stringValue,
        };
      })
    );

    // console.log(todos.map((todo) => todo._document.data.value.mapValue.fields));  
    console.log(userId)  
    setFirebaseTodos(firebaseData.filter((ele) => ele.user_Id === userId && ele ));
    setTodos(firebaseTodos);
  };
    useEffect(() => {
      getData(); 
    }); 

    // useEffect(() => {
    //   setFirebaseTodos(firebaseData.filter((ele) => ele.user_Id === userId && ele ));
    //   setTodos(firebaseTodos);
    // }, [firebaseData]);

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          position: "fixed",
          background: colorBgContainer,
        }}
        className={`z-50
        ${showMenu ? "left-[0]" : "-left-[200px]"}
          md:left-0  w-[200px] trans h-screen md:block shadow-sm`}
      >
        <Navbar
          setShowMenu={setShowMenu}
          setTodos={setTodos}
          todos={todos}
          firebaseTodos={firebaseTodos}
        />
      </Sider>

      {/* <Register_Form /> */}

      <Layout className="site-layout ml-0 md:ml-[200px]">
        <Header className="sticky top-0 bg-white text-4xl select-none shadow-lg text-start sm:text-center pt-3 font-railway">
          ToDo List
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="absolute z-50 top-2 text-2xl block md:hidden right-[10px] font-bold"
          >
            <MenuOutlined />
          </button>
        </Header>
        <Content
          style={{
            margin: "8px 4px",
            overflow: "initial",
          }}
        >
          <div className="flex flex-wrap gap-6 bg-white p-6 md:p-8 min-h-[85vh]">
            <TaskForm show={showAddTask} setShow={setShowAddTask} />
            {
              // Data from Firebase
              todos?.map((todo, i) => {
                return (
                  <Card
                    key={i}
                    todo_Id={
                      todo.todo_Id
                    }
                    head={
                      todo.title
                    }
                    text={
                      todo.text
                    }
                    date={
                      todo.todo_date
                    }
                    bg={
                      todo.bg
                    }
                    setTodos={setTodos}
                    todos={todos}
                  />
                );
              })
            }
            {/* End Of Card  */}
            {/* Add New Task Button */}
            <div className="flex justify-center items-center w-[350px] mx-auto sm:mx-0 sm:w-[48%] lg:w-[30%] h-[330px]">
              <div
                className={`flex flex-col justify-center items-center cursor-pointer aspect-square max-h-[150px] w-full py-6 px-5 rounded-md shadow-lg bg-gray-100/60 active:shadow-md active:bg-gray-200/40 `}
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
          
            {isLoading && <Loader />}  {/* Loader */}
          {/* Toast Container */}
          <ToastContainer />
        </Content>
        {/* Sign In Form */}
        {showSignIn && <Sign_In_Form setShow={setShowSignIn} />}
        {/* End of Sign In Form */}
        <Footer className="text-center font-semibold select-none text-gray-600 py-1 m-0">
          All Rights Reserved ©2022 Created by: ARslan Ahmad.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
