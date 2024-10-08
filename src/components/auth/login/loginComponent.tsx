"use client";
import React, { useEffect, useState } from "react";
import { handleChangeLoginInput } from "@/redux/actions/loginActions";
import { UseAppDispatch, UseAppSelector } from "@/redux/hook";
import { endPoints } from "@/utils/api/route";
import { postMethod } from "@/utils/api/postMethod";
import { signIn, useSession } from "next-auth/react";
import { Button, Input } from "antd";
import useLottieAnimation from "@/hooks/useAnimation";
import animationData from "./loginAnimation.json";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ui/theme";

const LoginComponent = () => {
  const dispatch = UseAppDispatch();
  const { data: session } = useSession();
  const { isDarkMode } = useTheme();
  const inputStyle = isDarkMode
    ? { 
        backgroundColor: "#212121", 
        borderColor: "#434343", 
        color: "#ffffff"
      }
    : {};
  const router = useRouter();
  const { email, password } = UseAppSelector(
    (state) => state?.loginauthReducer?.loginAuth?.loginInput
  );
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleChangeInput = (name: string, value: string) => {
    dispatch(handleChangeLoginInput(name, value));
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
      !validateEmail(email) ||
      !validatePassword(password) ||
      email === "" ||
      password === ""
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [email, password]);
  

  const handleLoginSubmit = async () => {
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain with uppercase letter, number, special character."
      );
      return;
    }
    setPasswordError(null);

    try {
      const response = await postMethod({
        route: endPoints.auth.login,
        postData: {
          strEmail: email,
          strPassword: password,
        },
      });
      console.log("response", response);

      if (response.data.statusCode === 200) {
        const result = await signIn("credentials", {
          strEmail: email,
          strPassword: password,
          redirect: false,
        });
        if (result?.ok) {
          router.push('/'); // Redirect to dashboard or desired page
        }
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const containerRef = useLottieAnimation({
    animationData,
    loop: true,
    autoplay: true,
  });
  return (
    <div className={`flex w-full min-h-screen justify-center items-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`}>
      {/* Lottie Animation Section */}
      <div className="w-1/2 flex justify-center items-center">
        <div ref={containerRef} className="w-96 h-96" />
      </div>

      {/* Login Form Section */}
      <div className={`w-[35%] p-8 ${isDarkMode ? 'bg-gray-900 border shadow-lg shadow-gray-600' : 'bg-white'} shadow-lg rounded-lg`}>
        <div className="flex justify-center font-semibold text-xl">
          Login for Pets?
        </div>
        <div className="flex flex-col gap-4 px-4 py-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email:</label>
            <Input
              type="email"
              name="email"
              title="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleChangeInput("email", e.target.value)}
              className={`px-4 py-3 rounded-md ${isDarkMode ? 'text-white' : 'text-black'}`}
              allowClear
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="password">Password:</label>
            <Input.Password
              type="password"
              name="password"
              title="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => handleChangeInput("password", e.target.value)}
              className={`px-4 py-3 rounded-md ${isDarkMode ? 'text-white' : 'text-black'}`}
              allowClear
              style={inputStyle}
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
              // type="button"
              title="login"
              className={`w-full p-2 rounded-md transition-colors duration-300
                ${isButtonDisabled
                  ? "cursor-not-allowed bg-gray-500 text-black hover:bg-gray-300 hover:text-gray-500 font-medium"
                  : "cursor-pointer bg-[#ed7e23] text-black hover:bg-[#ff9f4a] hover:text-gray-500"
                }`}

              onClick={handleLoginSubmit}
              disabled={isButtonDisabled}
            >
              Login
            </Button>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-sm gap-1">
          {`Don't have an account? `}
            <Link href="/register" className="underline text-blue-500">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
