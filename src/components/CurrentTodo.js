import React from "react";
import moment from "moment";

function CurrentTodo({ onGoingTasks }) {
  return (
    <div className="container max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">On-going Todo List</h1>
      <ul className="space-y-4 mx-4 text-xl">
        {onGoingTasks != "" ? (
          onGoingTasks.map((task) => (
            <div
              key={task.id}
              className="border-2 rounded-md shadow-lg p-2 m-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
            >
              <div className="text-xl ml-2 font-bold">
                <li>{task.todo}</li>
              </div>
              <div className="flex space-x-3 p-2 font-bold">
                <div>
                  <span className="text-base font-semibold">Status: </span>{" "}
                  {task.status}
                </div>
                <div>
                  <span className="text-base font-semibold">Date Added: </span>
                  {moment(task.createdAt).format("MMM DD, YYYY")}
                </div>
                <div>
                  <span className="text-base font-semibold">Date Due: </span>{" "}
                  {moment(task.due).endOf("day").fromNow()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="border-2 rounded-md shadow-lg justify-between p-2 m-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            <li>No Task To Complete</li>
          </div>
        )}
      </ul>
    </div>
  );
}

export default CurrentTodo;
