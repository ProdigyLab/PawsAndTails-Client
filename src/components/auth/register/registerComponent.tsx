"use client";
// Assuming you have the necessary imports and redux setup
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UseAppDispatch, UseAppSelector } from "@/redux/hook";
import {
  handleChangeRegisterInput,
  // submitRegisterForm,
} from "@/redux/actions/registerActions";
import SuccessLottie from "../success/success_lottie";
import { postMethod } from "@/utils/api/postMethod";
import { endPoints } from "@/utils/api/route";
import { signIn, useSession } from "next-auth/react";
import useLottieAnimation from "@/hooks/useAnimation";
import animationData from "../login/loginAnimation.json";
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { motion } from "framer-motion";

const RegisterComponent = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string | null>(null);
  const dispatch = UseAppDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  
  const {
    strUserName,
    strEmail,
    strPassword,
    strFirstName,
    strLastName,
    strPhone,
    strImageURL,
    dteCreatedAt,
    dteLastLoginAt,
    intOrganizationId,
  } = UseAppSelector(
    (state) => state?.registerAuthReducer?.registerAuth?.registerInput
  );

  const handleChangeInput = (name: string, value: string) => {
    dispatch(handleChangeRegisterInput(name, value));
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    // Disable the button if email or password is invalid
    if (
      !validateEmail(strEmail) ||
      !validatePassword(strPassword) ||
      strEmail === "" ||
      strPassword === ""
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [strEmail, strPassword]);
  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsRegister(true);
    setEmailError(null);
    if (!validatePassword(strPassword)) {
      setPasswordError(
        "Password must contain with uppercase letter, number, special character."
      );
      return;
    }

    setPasswordError(null);

    try {
      const response = await postMethod({
        route: endPoints.auth.register,
        postData: {
          strUserName: strUserName,
          strEmail: strEmail,
          strPassword: strPassword,
          strFirstName: strFirstName,
          strLastName: strLastName,
          strPhone: strPhone,
          strImageURL: strImageURL,
          dteCreatedAt: dteCreatedAt,
          dteLastLoginAt: dteLastLoginAt,
          intOrganizationId: intOrganizationId,
          // role: "Customer",
        },
      });
      console.log("response", response);

      if (response.data) {
        const loginResponse = await postMethod({
          route: endPoints.auth.login,
          postData: {
            strEmail: strEmail,
            strPassword: strPassword,
          },
        });

        if (loginResponse.data.statusCode === 200) {
          const result = await signIn("credentials", {
            // ...response?.data?.user,
            strEmail: strEmail,
          strPassword: strPassword,
            callbackUrl: "/",
            redirect: false,
          });
          if (result?.ok) {
            router.push('/'); // Redirect to dashboard or desired page
          }
          // handle success and navigate to home page
        } else {
          console.error("Login failed:", loginResponse.data.message);
        }
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.status === 409) {
        setEmailError(
          "This email is already registered. Please try with a different email."
        );
      } else {
        console.log("Registration failed:", error.message);
      }
    } finally {
      setIsRegister(false);
    }
  };
  const containerRef = useLottieAnimation({
    animationData,
    loop: true,
    autoplay: true,
  });

  return (
    <div className="w-full flex min-h-screen justify-center items-center bg-gray-100">
      {/* Lottie Animation Section */}
      <motion.div
        className="w-1/2 flex justify-center items-center"
        initial={{ y: 0 }}
        animate={{
          y: [0, -20, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
          },
        }}
      >
        <div ref={containerRef} className="w-96 h-96" />
      </motion.div>
      <div className="w-[40%] p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center font-semibold text-xl">
          Register Now
        </div>

        <div className="flex flex-col gap-4 px-4 py-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="strUserName">Username:</label>
            <Input
              type="text"
              id="strUserName"
              name="userName"
              value={strUserName}
              placeholder="Enter your username"
              className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChangeInput("strUserName", e.target.value)}
              allowClear
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="strFirstName">First Name:</label>
            <Input
              type="text"
              id="strFirstName"
              name="strFirstName"
              value={strFirstName}
              placeholder="Enter your first name"
              className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                handleChangeInput("strFirstName", e.target.value)
              }
              allowClear
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="strLastName">Last Name:</label>
            <Input
              type="text"
              id="strLastName"
              name="strLastName"
              value={strLastName}
              placeholder="Enter your last name"
              className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChangeInput("strLastName", e.target.value)}
              allowClear
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="strEmail">Email:</label>
            <Input
              type="email"
              id="strEmail"
              name="strEmail"
              value={strEmail}
              placeholder="Enter your email"
              allowClear
              className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChangeInput("strEmail", e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="strPhone">Phone:</label>
            <Input
              type="tel"
              id="strPhone"
              name="strPhone"
              value={strPhone}
              placeholder="Enter your phone"
              allowClear
              className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChangeInput("strPhone", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="strPassword">Password:</label>
            <Input.Password
              type="password"
              id="strPassword"
              name="strPassword"
              value={strPassword}
              placeholder="Enter your password"
              allowClear
              className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChangeInput("strPassword", e.target.value)}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              visibilityToggle
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>

          <div className="w-full">
            <Button
            ghost
              title="register"
              className={`w-full bg-[#ed7e23] text-black p-2 rounded-md hover:bg-[#ed7e23] ${
                isButtonDisabled
                  ? "cursor-not-allowed bg-gray-400 hover:bg-gray-300"
                  : "cursor-pointer"
              }`}
              onClick={handleRegisterSubmit}
              disabled={isButtonDisabled}
            >
              Register
            </Button>
          </div>
        </div>
        {/* )} */}
        <div>
          <div className="flex justify-center text-sm gap-1">
            Already Registered?{" "}
            <Link href="/login" className="underline text-blue-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
