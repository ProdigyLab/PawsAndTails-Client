import * as Types from "../types/registerTypes";
import type { IRegisterAuthReducer } from "../interface";
import type { AnyAction } from "@reduxjs/toolkit";

const initialState: IRegisterAuthReducer = {
registerInput: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
},
  isSubmitting: false,
  errors: "",
};

const RegisterAuthReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case Types.CHANGE_REGISTER_INPUT:
      const RegisterInput = { ...state.registerInput };

      return {
        ...state,
        registerInput: { ...RegisterInput, ...action.payload },
      };
    default:
      break;
  }
  return state;
};

export default RegisterAuthReducer;