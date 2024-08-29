import * as Types from "../types/searchTypes";
import type { ISearchReducer } from "../interface";
import type { AnyAction } from "@reduxjs/toolkit";

const initialState: ISearchReducer = {
  searchTerm: "",
};

const SearchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case Types.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
      case Types.SET_SEARCH_RESULTS:
        return {
         ...state,
          // Add logic to handle search results
          results: action.payload
        };
    default:
      break;
  }
  return state;
};

export default SearchReducer;