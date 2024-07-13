import React from "react";
import { useAppDispatch } from "../redux/hook";
import { toggleTodo, deleteTodo } from "../redux/actions/todoActions";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  color: string
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, color }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(toggleTodo(id))}
            className="mr-2"
            title="checkbox"
          />
          <span style={{ textDecoration: completed ? "line-through" : "none" }}>
            {text}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex space-x-2">
            <input
              type="radio"
              title="red"
              name={`color-${id}`}
              className="w-4 h-4"
              style={{ backgroundColor: "red" }}
            />
            <input
              type="radio"
              title="green"
              name={`color-${id}`}
              className="w-4 h-4"
              style={{ backgroundColor: "green" }}
            />
            <input
              type="radio"
              title="yellow"
              name={`color-${id}`}
              className="w-4 h-4"
              style={{ backgroundColor: "yellow" }}
            />
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            onClick={() => dispatch(deleteTodo(id))}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
};

export default TodoItem;
