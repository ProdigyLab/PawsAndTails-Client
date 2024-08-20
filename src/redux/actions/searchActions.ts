// import type { Dispatch } from "@reduxjs/toolkit";
// import * as Types from "../types/searchTypes";

// export const setSearchTerm = (searchTerm: string) => (dispatch: Dispatch) => {
//   dispatch({ type: Types.SET_SEARCH_TERM, payload: searchTerm });
// };

// src/redux/actions/searchActions.ts

export const setSearchTerm = (searchTerm: string) => ({
  type: 'SET_SEARCH_TERM',
  payload: searchTerm,
});
