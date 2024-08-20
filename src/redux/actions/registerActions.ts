import { createAsyncThunk, type Dispatch } from "@reduxjs/toolkit";
import * as Types from "../types/registerTypes";
import axios from "axios";

export const handleChangeRegisterInput =
  (name: string, value: string | number) => (dispatch: Dispatch) => {
    const data = {
      [name]: value,
    };
    dispatch({ type: Types.CHANGE_REGISTER_INPUT, payload: data });
  };

export const submitRegisterForm =
  (formData: Record<string, string | number>) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response", response);

      if (!response.data) {
        throw new Error("Network response was not ok");
      }

      const result = response.data;
      dispatch({ type: Types.REGISTER_SUCCESS, payload: result });
    } catch (error: unknown) {
      if (typeof error === "string") {
        dispatch({ type: Types.REGISTER_FAILURE, payload: error });
      } else if (error instanceof Error) {
        dispatch({ type: Types.REGISTER_FAILURE, payload: error.message });
      } else {
        dispatch({ type: Types.REGISTER_FAILURE, payload: "Unknown error" });
      }
    }
  };
