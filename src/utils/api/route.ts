export const endPoints = {
  //AuthApi
  auth: {
    //login api
    login: "login",
    logout: "auth/logout",
    // register api
    sendOtp: "auth/sendOtp",
    verifyOtp: "auth/verifyOtp",
    register: "users/create",
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
    getSinglePetInfo: (id: number) => `petInfo/${id}`,
  }
};
