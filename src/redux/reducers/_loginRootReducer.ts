import LoginauthReducer from "./loginReducer";

export const loginauthRootReducer: Record<string, typeof LoginauthReducer> = {
  loginAuth: LoginauthReducer,
} as const;