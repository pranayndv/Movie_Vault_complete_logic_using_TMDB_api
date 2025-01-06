import React from "react";

const Pagination = ({pageNo, next, prev}) => {
  return (
    <div className="flex justify-center items-center space-x-6 rounded-full w-full mx-5 my-5">
      <div onClick={prev}>
        <i className="fa-solid fa-arrow-left-long broder rounded-full border-[4px] text-purple-700 p-5 border-purple-700 hover:scale-105 duration-500"></i>
      </div>
      <div className="text-purple-500">{pageNo}</div>
      <div onClick={next}>
        <i className="fa-solid fa-arrow-right broder rounded-full border-[4px] text-purple-700 p-5 border-purple-700  hover:scale-105 duration-500"></i>
      </div>
    </div>
  );
};


export default Pagination;
