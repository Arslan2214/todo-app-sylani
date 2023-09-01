import {
  CloseOutlined,
  DoubleRightOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React, { useContext } from "react";
import { AuthContext } from "../../App";

function Navbar({ setShowMenu, setTodos, firebaseTodos, todos }) {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  // --------------------- Counts -------------------
  const upcomingTodosCount = () => {
    return todos.filter((todo) => {
      const todo_time = new Date(todo.todo_date).getTime();
      if (todo_time > new Date().getTime()) {
        return todo;
      }
    }).length;
  };
  // console.log(todos)

  const todayTodosCount = () => {
    const currentDate = new Date();
    const todayTodos = todos.filter((ele) => {
      const todoDate = new Date(ele.todo_date);
      return (
        todoDate.getFullYear() === currentDate.getFullYear() &&
        todoDate.getMonth() === currentDate.getMonth() &&
        todoDate.getDate() === currentDate.getDate()
      );
    });
    return todayTodos?.length;
  };
  // console.log(todos.map(todo => todo._document.data.value.mapValue.fields));

  // ------------------- Filters ----------------------
  // Upcoming Todos ------------
  const UpcomingTodos = () => {
    const currentDate = new Date();
    const upcomingTodos = firebaseTodos.filter((ele) => {
      const todoDate = new Date(
        ele.todo_date
      );
      return (
        todoDate.getTime() > currentDate.getTime() 
      );
    });
    setTodos(upcomingTodos);
  };

  // Today's Todos ------------
  const todaytodos = () => {
    const currentDate = new Date();
    const todayTodos = firebaseTodos.filter((ele) => {
      const todoDate = new Date(
        ele.todo_date
      );
      return (
        todoDate.getFullYear() === currentDate.getFullYear() &&
        todoDate.getMonth() === currentDate.getMonth() &&
        todoDate.getDate() === currentDate.getDate()
      );
    });
    setTodos(todayTodos);
  };

  // All Todos ----------
  const fullTodosList = () => {
    setTodos(firebaseTodos);
  };
  const signOut = () => {
    setIsAuth(false);
  };

  // Search Function
  const handelSearch = (e) => {
    const inputValue = e.target.value.trim(); // Remove leading and trailing whitespace

    if (inputValue === "") {
      setTodos(todos);
      return;
    }

    const newTodos = todos?.filter((ele) => {
      // Split input value and todo title into words
      const inputWords = inputValue.toLowerCase().split(" ");
      const todoTitleWords = ele.title.toLowerCase().split(" ");

      // Check if any word in todo title matches any word in input value
      return inputWords.some((inputWord) =>
        todoTitleWords.some((todoTitleWord) =>
          todoTitleWord.includes(inputWord)
        )
      );
    });

    setTodos(newTodos);
  };
  // Menu List
  const list1 = [
    {
      text: "Upcoming",
      icon: <DoubleRightOutlined />,
      fun: () => UpcomingTodos(),
    },
    {
      text: "Today",
      icon: <UnorderedListOutlined />,
      fun: () => todaytodos(),
    },
    {
      text: "Todo List",
      icon: <MenuFoldOutlined />,
      fun: () => fullTodosList(),
    },
  ];

  // Collection List
  const collect = [
    {
      text: "Upcoming",
      ntf: upcomingTodosCount() || 0,
      clr: "#6ee7b7",
    },
    { text: "Today", ntf: todayTodosCount() || 0, clr: "#67e8f9" },
    {
      text: "Todo List",
      ntf: todos.length || 0,
      clr: "#fda4af",
    },
  ];

  return (
    <>
      <nav className="flex flex-col justify-between pt-3 px-2 m-1 bg-slate-100/40 h-[98vh] rounded-lg">
        <div>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Menu</p>
              <div
                onClick={() => setShowMenu(false)}
                className="block md:hidden px-2 text-lg mb-2 cursor-pointer"
              >
                <CloseOutlined />
              </div>
            </div>
            {/* Search Bar */}
            <div className="flex justify-center items-center w-full bg-white px-2 rounded-lg my-2">
              <span>
                <SearchOutlined className="text-lg mb-1 text-gray-400 cursor-pointer" />
              </span>
              <input
                type="text"
                onChange={(e) => handelSearch(e)}
                placeholder="Search"
                className="w-full p-2 bg-transparent rounded-md outline-none border-none border-r-2 border-t-2 border-b-2"
              />
            </div>
          </div>
          {/* ---------------- Menu List ---------------- */}
          <div className="my-4">
            <List tit="Tasks" list={list1} />
          </div>
          {/* ---------------- Collection List ---------------- */}
          <div>
            <Collection head="List" collect={collect} />
          </div>
        </div>
        <div className="">
          {/* // Uesr Name */}
          <div
            className="cursor-pointer flex justify-center text-slate-400 border py-1 hover:bg-slate-100 hover:text-slate-600 items-start space-x-2"
            onClick={() => signOut()}
          >
            <p className="text-[16px]">Sign out</p>{" "}
            <LogoutOutlined className="text-lg" />
          </div>
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
                onClick={ele.fun}
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
