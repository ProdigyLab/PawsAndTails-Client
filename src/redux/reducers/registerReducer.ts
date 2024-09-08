import * as Types from "../types/registerTypes";
import type { IRegisterAuthReducer } from "../interface";
import type { AnyAction } from "@reduxjs/toolkit";

const initialState: IRegisterAuthReducer = {
registerInput: {
  intRoleId: 0,
  strUserName: "",
  strFirstName: "",
  strLastName: "",
  strPhone: "",
  strEmail: "",
  strPassword: "",
  strImageURL: "",
  dteCreatedAt: new Date(),
  dteLastLoginAt: new Date(),
  intOrganizationId: 0,
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