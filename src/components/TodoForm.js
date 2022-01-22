import React from "react";
import moment from "moment";

const TodoForm = ({
  newTask,
  setNewTask,
  newTaskDue,
  setNewTaskDue,
  addTask,
}) => {
  return (
    <div className="mt-5 border-2 shadow-lg rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <form className="w-full max-w-xl rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg font-bold">
            Add New Task
          </h2>

          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="bg-gray-200 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="todo"
              placeholder="Type the Task"
              required
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <label htmlFor="due">Due date:</label>
            <input
              className="bg-gray-200 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="due"
              type="date"
              required
              value={moment(newTaskDue).format("YYYY-MM-DD")}
              onChange={(e) => {
                setNewTaskDue(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-full flex items-start px-3">
            <div className="-mr-1">
              <input
                type="button"
                className="bg-green-400 text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Add"
                onClick={addTask}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
