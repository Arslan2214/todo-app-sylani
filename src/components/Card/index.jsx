import React from "react";

function index({ head, text }) {
  const colors = [
    "pink",
    "red",
    "orange",
    "amber",
    "lime",
    "green",
    "teal",
    "cyan",
    "sky",
    "violet",
    "fuchsia",
    "rose",
  ];
  const randomColor = () => {
    let ind = Math.floor(Math.random() * colors.length);
    console.log(colors[ind]);
    return colors[ind];
  };

  const bg = randomColor();

  return (
    <>
      <div
        className={`h-[400px] w-[350px] py-6 px-5 rounded-md shadow-lg bg-${bg}-300/60`}
      >
        <div className="my-2 text-start h-[10%]">
          <h3 className="text-2xl text-gray-500 font-semibold">{head}</h3>
        </div>
        <div className="overflow-auto h-[80%]">
          <p className="text-justify text-[16px] text-gray-400">{text}</p>
        </div>
      </div>
    </>
  );
}

export default index;
