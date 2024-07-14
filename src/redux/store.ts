
import {
  combineReducers,
  configureStore,
  type Reducer,
  type ThunkAction,
  type AnyAction,
} from "@reduxjs/toolkit";
import { loginauthRootReducer } from "./reducers/_loginRootReducer";
import todorootReducer from "./reducers/rootReducer";

export type RootState = {
  app: any;

  loginauthReducer: {
    [key in keyof typeof loginauthRootReducer]: ReturnType<
      (typeof loginauthRootReducer)[key]
    >;
  };

  todoReducer: {
    [key in keyof typeof todorootReducer]: ReturnType<
      (typeof todorootReducer)[key]
    >;
  };
 
};

// Combine all module reducers into a single rootReducer
// @ts-expect-error type error is not solved
const rootReducer: Reducer<RootState> = combineReducers({
  loginauthReducer: combineReducers(loginauthRootReducer) as Reducer,
  todoReducer: combineReducers(todorootReducer) as Reducer,

  // Add more modules as needed
});

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, dev tools config, etc. if needed
});
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, AnyAction>;

export default store;