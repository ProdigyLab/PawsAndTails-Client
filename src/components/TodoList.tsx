"use client"
import React from 'react';
import TodoItem from './TodoItem';
import { UseAppSelector } from '@/redux/hook';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const todos: TodoItemProps[] = UseAppSelector((state) => state.todoReducer.todo_Root_Reducer.todosReducer);
console.log("todos", todos);

  return (
    <div className="flex justify-center items-center">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Todo
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {todos.map((todo: TodoItemProps, index) => (
            <TodoItem key={index} {...todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
