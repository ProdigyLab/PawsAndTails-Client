export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    color?: 'green' | 'red' | 'yellow'
  }
  
  export const ADD_TODO = 'ADD_TODO';
  export const TOGGLE_TODO = 'TOGGLE_TODO';
  export const DELETE_TODO = 'DELETE_TODO';
  export const COLOR_SELECT_TODO  = 'COLOR_SELECT_TODO';
  
  interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: string;
  }
  
  interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    payload: number;
  }
  
  interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: number;
  }

  interface ColorSelectTodoAction {
    type: typeof COLOR_SELECT_TODO;
    payload: {id:number,color: 'green' | 'red' | 'yellow' }
  }
  
  export type TodoActionTypes = AddTodoAction | ToggleTodoAction | DeleteTodoAction | ColorSelectTodoAction;
  