import React, { useState } from "react";
import { Input, Form, DatePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { collection, addDoc } from "firebase/firestore";

let todos = [] || localStorage.getItem("todo");

const Index = ({ show, setShow }) => {
  const initial_todo = {
    title: "",
    todo_date: "",
    text: "",
    todo_Id: ()=> new Date().getTime().toString(),
  };
  const [todo, setTodo] = useState(initial_todo);

  const handelChange = (e) => {
    // console.log(e.target  )
    const { name, value } = e.target;
    console.log("name =>", name);
    console.log("value =>", value);
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = async () => {
    // e.preventDefault();
    console.log(todo);
    todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(todos));

    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    setTodo(initial_todo)
    setShow(false);
  };
  // setShow(true);
  return (
    <div className="absolute top-0 left-0 flex justify-center w-screen">
      <dialog
        className={`relative p-2 
        ${show ? "block" : "hidden"}
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
            <label className="text-mono text-semibold ">
              Task Completion Date
            </label>
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
      </dialog>
    </div>
  );
};

// export const useShow = () => setShow((pre) => !pre);

export default Index;
// export default index;
