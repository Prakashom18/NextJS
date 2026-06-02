"use client";

import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="p-6 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Todo App
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Enter task"
        />

        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((item, index) => (
          <li
            key={index}
            className="flex justify-between border p-2 rounded"
          >
            {item}

            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}