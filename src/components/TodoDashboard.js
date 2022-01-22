import Tippy from "@tippyjs/react";
import React from "react";
import "tippy.js/dist/tippy.css"; // optional

const TodoDashboard = ({ todos, unfinishedTask, onGoingTask, doneTask }) => {
  return (
    <div className="border-2 shadow-lg rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-center font-bold text-lg">Dashboard</h1>
      <div className="flex m-2 space-x-2 items-center">
        <div className="text-base font-semibold">Total Task : </div>

        <div className="font-bold text-lg">{todos.length}</div>
      </div>
      <div className="flex space-x-2 m-2 items-center">
        <Tippy content="Click to view list">
          <button
            type="button"
            className="text-base font-semibold"
            onClick={() => alert("clicked")}
          >
            Unfinished :
          </button>
        </Tippy>
        <div className="font-bold text-lg">
          {unfinishedTask.length} | (
          {Math.round((unfinishedTask.length / todos.length) * 10000) / 100}%)
        </div>
      </div>
      <div className="flex space-x-2 m-2 items-center">
        <Tippy content="Click to view list">
          <button
            type="button"
            className="text-base font-semibold"
            onClick={() => alert("clicked")}
          >
            On-going :
          </button>
        </Tippy>
        <div className="font-bold text-lg">
          {onGoingTask.length} | (
          {Math.round((onGoingTask.length / todos.length) * 10000) / 100}%)
        </div>
      </div>
      <div className="flex space-x-2 m-2 items-center">
        <div className="text-base font-semibold">Done :</div>
        <div className="font-bold text-lg">
          {doneTask.length} | (
          {Math.round((doneTask.length / todos.length) * 10000) / 100}%)
        </div>
      </div>
    </div>
  );
};

export default TodoDashboard;
