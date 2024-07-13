"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todosRootReducer.todosReducer);

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
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
