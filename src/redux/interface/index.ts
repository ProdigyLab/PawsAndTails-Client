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
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
  };
  errors: any
}