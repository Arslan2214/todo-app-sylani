import React from "react";
import { Input, Form, DatePicker } from "antd";

const index = () => {
  // const [show, setShow] = useState(false);
  // const useShow = () => setShow((pre) => !pre);
  const show = false;
  return (
    <>
      <dialog
        className={`fixed p-2 
        ${show ? "block" : "hidden"}
         sm:p-6 lg:p-10 text-center left-[20%] sm:left-[40%] top-7 h-[60vh] lg:h-[55vh] bg-gray-50 border rounded-xl z-10 min-w-[250px] w-[30%]`}
      >
        <div className="my-4 space-y-3 lg:space-y-6 w-[80%] mx-auto">
          <div className="w-full text-center">
            <Input placeholder="Title of Task" />
          </div>
          <div className="w-full">
            <Form.Item className="text-mono" label="Task Completion Date">
              <DatePicker />
            </Form.Item>
          </div>
        </div>
        <div className="text-center my-3">
          <textarea
            className="p-2 resize-none bg-white shadow outline-none border-none text-gray-400 h-[120px]  w-[80%]"
            placeholder="Enter Text ..."
            name="text"
          ></textarea>
        </div>
        <div className="text-center my-3">
          <button className="py-3 px-8 font-semibold text-md bg-sky-400 text-white rounded-sm shadow-lg hover:bg-sky-500 transition-all duration-300 ease-in-out active:shadow-sm">
            Add Task
          </button>
        </div>
      </dialog>
    </>
  );
};

// export { useShow };
export default index;
// export default index;
