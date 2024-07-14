import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const todorootReducer = combineReducers({
    todosRootReducer: todoReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof todorootReducer>;
export default todorootReducer;
