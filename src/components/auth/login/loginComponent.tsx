"use client";
import React from "react";
import { handleChangeLoginInput } from "@/redux/actions/loginActions";
import { UseAppDispatch, UseAppSelector } from "@/redux/hook";
import axios from "axios";
import { endPoints } from "@/utils/api/route";
import { getMethod } from "@/utils/api/getMethod";
import { postMethod } from "@/utils/api/postMethod";
import { signIn } from "next-auth/react";

const LoginComponent = () => {
  const dispatch = UseAppDispatch();
  const { email, password } = UseAppSelector(
    (state) => state?.loginauthReducer?.loginAuth?.loginInput
  );

  const handleChangeInput = (name: string, value: string) => {
    dispatch(handleChangeLoginInput(name, value));
  };

  const handleLoginSubmit = async () => {
    try {
      const response = await postMethod({route:endPoints.auth.login, postData:{
        email: email,
        password: password
      }},
    )
    if(response.data.statusCode === 200) {
      await signIn("credentials", {
        ...response?.data?.user,
        redirect: false,
      });
      console.log(response.data.data)
    }
    else{
      console.error(response.data.message)
    }
    } catch (error) {
      console.error(error)
    }
  }

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
            onClick={handleLoginSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
