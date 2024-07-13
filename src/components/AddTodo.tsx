"use client";
import React, { useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { addTodo } from "../redux/actions/todoActions";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
          className="mb-2 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
