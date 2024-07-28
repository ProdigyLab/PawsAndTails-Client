// Assuming you have the necessary imports and redux setup
import React, { useState } from "react";
import { UseAppDispatch, UseAppSelector } from "@/redux/hook";
import {
  handleChangeRegisterInput,
  submitRegisterForm,
} from "@/redux/actions/registerActions";
import SuccessLottie from "../success/success_lottie";

const RegisterComponent = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const dispatch = UseAppDispatch();
  const {
    strUserName,
    strEmail,
    strPassword,
    strFirstName,
    strLastName,
    strPhone,
  } = UseAppSelector(
    (state) => state?.registerAuthReducer?.registerAuth?.registerInput
  );
  // console.log("strUserName", strUserName);
  // console.log("strFirstName", strFirstName);

  const handleChangeInput = (name: string, value: string) => {
    dispatch(handleChangeRegisterInput(name, value));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      strUserName,
      strEmail,
      strPassword,
      strFirstName,
      strLastName,
      strPhone,
    };
    try {
     await dispatch(submitRegisterForm(formData));
      setIsRegister(true);
      console.log("formData", formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-4 p-4">
        {isRegister ? (
          <SuccessLottie />
        ) : (
          <form>
            <div className="flex flex-col gap-2">
              <label htmlFor="strUserName">Username:</label>
              <input
                type="text"
                id="strUserName"
                name="userName"
                value={strUserName}
                placeholder="Enter your username"
                className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  handleChangeInput("strUserName", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="strFirstName">First Name:</label>
              <input
                type="text"
                id="strFirstName"
                name="strFirstName"
                value={strFirstName}
                placeholder="Enter your first name"
                className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  handleChangeInput("strFirstName", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="strLastName">Last Name:</label>
              <input
                type="text"
                id="strLastName"
                name="strLastName"
                value={strLastName}
                placeholder="Enter your last name"
                className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  handleChangeInput("strLastName", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="strEmail">Email:</label>
              <input
                type="email"
                id="strEmail"
                name="strEmail"
                value={strEmail}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChangeInput("strEmail", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="strPhone">Phone:</label>
              <input
                type="tel"
                id="strPhone"
                name="strPhone"
                value={strPhone}
                placeholder="Enter your phone"
                className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChangeInput("strPhone", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="strPassword">Password:</label>
              <input
                type="password"
                id="strPassword"
                name="strPassword"
                value={strPassword}
                placeholder="Enter your password"
                className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  handleChangeInput("strPassword", e.target.value)
                }
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="w-full px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
