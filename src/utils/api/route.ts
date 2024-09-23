export const endPoints = {
  //AuthApi
  auth: {
    //login api
    login: "/api/v1/login",
    logout: "auth/logout",
    // register api
    sendOtp: "auth/sendOtp",
    verifyOtp: "auth/verifyOtp",
    register: "/api/v1/users/create",
    //forgot-password
    updatePassword: "auth/forgot-password",
    //refreshtokenvalidate
    validaterefreshtoken: "auth/refresh",
    //unknownApi
    verifypassword: "auth/verify-password",
    registerOrg: "auth/registerOrg",
  },
  petInfo: {
    getPetsInfoData: "petInfo",
  }
};
