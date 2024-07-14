"use client";
import React from "react";
import { handleChangeLoginInput } from "@/redux/actions/loginActions";
import { UseAppDispatch, UseAppSelector } from "@/redux/hook";

const LoginComponent = () => {
  const dispatch = UseAppDispatch();
  const { email, password } = UseAppSelector(
    (state) => state?.loginauthReducer?.loginAuth?.loginInput
  );

  console.log("email", email);
  console.log("password", password);

  const handleChangeInput = (name: string, value: string) => {
    dispatch(handleChangeLoginInput(name, value));
  };
  return (
    <div>
      <div className=" w-full flex flex-col gap-4  ">
        <div className=" flex flex-col gap-4 ">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            title="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleChangeInput("email", e.target.value)}
            className=" px-2 py-3 rounded-md text-black "
          />
        </div>
        <div className=" flex flex-col gap-4 ">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            title="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => handleChangeInput("password", e.target.value)}
            className=" px-2 py-3 rounded-md text-black "
          />
        </div>
        <div className=" w-full  ">
          <button
            type="button"
            title="login"
            className=" w-full bg-green-700 text-white p-2 rounded-md hover:bg-green-600  "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
