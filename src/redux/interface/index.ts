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
    intRoleId: number
    strUserName: string
    strFirstName: string
    strLastName: string
    strEmail: string
    strPhone: string
    strPassword: string
    strImageURL: string;
    dteCreatedAt: Date;
    dteLastLoginAt: Date;
    intOrganizationId: number;
  };
  errors: any
}
export interface ISearchReducer {
  searchTerm: string;
}