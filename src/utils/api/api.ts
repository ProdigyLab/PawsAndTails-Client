import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
// import Cookies from "universal-cookie";
import { getSession } from "next-auth/react";

export const apiSetup = async () => {
  const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  const session = await getSession();
  // @ts-expect-error type error is not solved
  const AccessToken = session?.user?.accessToken;

  if (AccessToken) {
    const headers: AxiosRequestConfig["headers"] = {
      "X-Frame-Options": "DENY",
      Authorization: `Bearer ${AccessToken}`,
    };

    // Check if api and api.defaults exist before assigning headers
    if (api && api.defaults) {
      // @ts-expect-error type error is not solved
      api.defaults.headers = headers;
    }
  }

  return api;
};
