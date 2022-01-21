import React from 'react';
import moment from "moment";

const DoneTodo = ({doneTask}) => {
  return <div className="container max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold text-center pt-5">Done Task</h1>
  <ul className="space-y-4 mx-4 text-xl">
    {doneTask != "" ? (
      doneTask.map((task) => (
        <div
          key={task.id}
          className="border-2 rounded-md shadow-lg p-2 m-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
        >
          <div className="flex font-bold">
            <li>{task.todo}</li>
          </div>
          
          <div className="font-bold">
          <span className="text-base font-semibold">Date Completed: </span>
            {moment(task.finishedAt).format("MMM DD, YYYY")}
          </div>
    
        </div>
      ))
    ) : (
      <div className="border-2 rounded-md shadow-lg p-2 m-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <li>No Task Completed</li>
      </div>
    )}
  </ul>
</div>
};

export default DoneTodo;
