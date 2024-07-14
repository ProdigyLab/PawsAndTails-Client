import todoReducer from './todoReducer';

export const todoRootReducer: Record<string, typeof todoReducer> = {
  todo_Root_Reducer: todoReducer,
} as const;