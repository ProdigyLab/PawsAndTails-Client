import SearchReducer from "./searchReducer";

export const searchRootReducer: Record<string, typeof SearchReducer> = {
  search: SearchReducer,
} as const;