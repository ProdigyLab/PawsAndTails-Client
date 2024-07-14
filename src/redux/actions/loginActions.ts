import type { Dispatch } from "@reduxjs/toolkit";
import * as Types from "../types/loginTypes";

export const handleChangeLoginInput = (name: string, value: string | number)=> (dispatch: Dispatch)=>{
    console.log("name", name);
    
  const data = {
    [name]:value
  }
  dispatch({ type: Types.CHANGE_LOGIN_INPUT, payload: data });

}