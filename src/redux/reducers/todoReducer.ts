import { Todo, ADD_TODO, TOGGLE_TODO, DELETE_TODO, COLOR_SELECT_TODO, TodoActionTypes } from '../types/todoTypes';

interface TodoState {
  todosReducer: Todo[];
}

const initialState: TodoState = {
    todosReducer: [],
};

const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        todosReducer: [...state.todosReducer, newTodo],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todosReducer: state.todosReducer.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todosReducer: state.todosReducer.filter(todo => todo.id !== action.payload),
      };

    case COLOR_SELECT_TODO: 
    return {
      ...state,
      todosReducer: state.todosReducer.map(todo => todo.id === action.payload.id ? {...todo, color: action.payload.color} : todo)
    }
    default:
      return state;
  }
};

export default todoReducer;
