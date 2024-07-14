import type { Dispatch } from "@reduxjs/toolkit";
import * as Types from "../types/registerTypes";

export const handleChangeRegisterInput = (name: string, value: string | number)=> (dispatch: Dispatch)=>{ 
  const data = {
    [name]:value
  }
  dispatch({ type: Types.CHANGE_REGISTER_INPUT, payload: data });

}