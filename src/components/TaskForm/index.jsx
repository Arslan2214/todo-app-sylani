import React, { useContext, useState } from "react";
import { Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { doc, setDoc } from "firebase/firestore";
import { UserId } from "../../App";
import { db } from "../../Global/Firebase";
import { Toast } from "../../Global/Tostify";
import { useSpring, animated } from "react-spring";
import { LoadContext } from "../../App";

const Index = ({ show, setShow }) => {
  const [isLoading, setIsLoading] = useContext(LoadContext);
  const [userId] = useContext(UserId);
  const date = new Date();
  const initial_todo = {
    title: "",
    todo_date: "",
    text: "",
    todo_Id: "Id_" + date.getTime(),
    user_Id: userId,
    bg: (() => {
      const colors = [
        "bg-pink-300/60",
        "bg-lime-300/60",
        "bg-teal-300/60",
        "bg-cyan-300/60",
      ];

      let ind = Math.floor(Math.random() * colors.length);
      return colors[ind];
    })(),
  };
  const [todo, setTodo] = useState(initial_todo);

  const handelChange = (e) => {
    // console.log(e.target  )
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const AddTaskAnimation = useSpring({
    marginTop: show ? 0 : -100,
    display: show ? "block" : "none",
  });

  const addTodo = async () => {
    setIsLoading(true);
    try {
      await setDoc(doc(db, "todo", todo.todo_Id), todo);

      setTodo(initial_todo);
      Toast({
        type: "success",
        content: "New Task Added, Successfully",
      });
      setShow(false);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      Toast({
        type: "error",
        content: "Error, During Todo-Adding",
      });
    }
    setIsLoading(false);
  };
  // setShow(true);
  return (
    // <div className=" inset-0 flex justify-center items-center z-10">
    <animated.dialog
      style={AddTaskAnimation}
      className={`fixed p-2 
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
          <Input
            onChange={handelChange}
            value={todo.title}
            name="title"
            // value={todo.title}
            placeholder="Title of Task"
          />
        </div>
        <div className="w-full">
          <label className="text-mono mr-2 text-semibold ">Due Date:</label>
          <input
            className="border px-2 py-1 rounded-md focus:outline outline-sky-300"
            type="date"
            name="todo_date"
            onChange={handelChange}
            value={todo.todo_date}
            placeholder="Select Date"
          />
        </div>
      </div>
      <div className="text-center my-3">
        <textarea
          onChange={handelChange}
          value={todo.text}
          name="text"
          // value={todo.text}
          className="p-2 resize-none bg-white shadow outline-none border-none text-gray-400 h-[120px]  w-[80%]"
          placeholder="Enter Text ..."
        ></textarea>
      </div>
      <div className="text-center my-3">
        <button
          className="py-3 px-8 font-semibold text-md bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm"
          onClick={() => {
            addTodo();
          }}
        >
          Add Task
        </button>
      </div>
    </animated.dialog>
    // </div>
  );
};

// export const useShow = () => setShow((pre) => !pre);

export default Index;
// export default index;
