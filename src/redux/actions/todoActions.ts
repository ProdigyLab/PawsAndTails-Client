import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, COLOR_SELECT_TODO, TodoActionTypes } from '../types/todoTypes';

export const addTodo = (text: string): TodoActionTypes => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: number): TodoActionTypes => ({
  type: DELETE_TODO,
  payload: id,
});

export const colorSelectTodo = (id: number, color: 'green' | 'red' | 'yellow'): TodoActionTypes => ({
  type: COLOR_SELECT_TODO,
  payload: {id, color},
})
