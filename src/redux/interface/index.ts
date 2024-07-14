export interface ILoginAuthReducer {
    isSubmitting: boolean;
    loginInput: {
      email: string;
      password: string;
    };
    errors: any;
  }