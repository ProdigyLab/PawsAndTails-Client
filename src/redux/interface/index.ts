export interface ILoginAuthReducer {
    isSubmitting: boolean;
    loginInput: {
      email: string;
      password: string;
    };
    errors: any;
  }

export interface IRegisterAuthReducer {
  isSubmitting: boolean;
  registerInput: {
    strUserName: string
    strFirstName: string
    strLastName: string
    strEmail: string
    strPhone: string
    strPassword: string
  };
  errors: any
}