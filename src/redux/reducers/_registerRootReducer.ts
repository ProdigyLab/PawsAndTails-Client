import RegisterAuthReducer from './registerReducer'

export const registerAuthRootReducer: Record<string, typeof RegisterAuthReducer> = {
    registerAuth: RegisterAuthReducer,
  } as const;