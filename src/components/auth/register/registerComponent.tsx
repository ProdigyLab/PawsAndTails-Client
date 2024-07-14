"use client";
import React from "react";
import { UseAppDispatch, UseAppSelector } from "@/redux/hook";
import { handleChangeRegisterInput } from "@/redux/actions/registerActions";

const RegisterComponent = () => {
    const dispatch = UseAppDispatch();
    const { email, password, firstName, lastName, phone } = UseAppSelector(
        (state) => state?.registerAuthReducer?.registerAuth?.registerInput
      );
      
      console.log("firstName", firstName);
      console.log("lastName", lastName);
      console.log("email", email);
      console.log("phone", phone);
      console.log("password", password);
      
    const handleChangeInput = (name: string, value: string) => {
        dispatch(handleChangeRegisterInput(name, value));    
      };
      
  return (
    <div className=" w-full ">
      <div className=" w-full flex flex-col gap-2 ">
        <form action="">
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              title="firstName"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="Enter your First name"
              className=" px-2 py-3 rounded-md text-black "
              onChange={(e) => handleChangeInput('firstName', e.target.value) }
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              title="lastName"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Enter your Last name"
              className=" px-2 py-3 rounded-md text-black "
              onChange={(e) => handleChangeInput('lastName', e.target.value) }
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              title="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              className=" px-2 py-3 rounded-md text-black "
              onChange={(e) => handleChangeInput('email', e.target.value) }
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              title="phone"
              id="phone"
              name="phone"
              value={phone}
              placeholder="Enter your phone"
              className=" px-2 py-3 rounded-md text-black "
              onChange={(e) => handleChangeInput('phone', e.target.value) }
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              title="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              className=" px-2 py-3 rounded-md text-black "
              onChange={(e) => handleChangeInput('password', e.target.value) }
            />
          </div>
          <div className=" flex justify-center mt-2 border border-gray-300 px-2 py-3 bg-green-500 rounded-md hover:bg-green-600 text-white cursor-pointer ">
            <button type="button" title="register">
              {" "}
              Register{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
