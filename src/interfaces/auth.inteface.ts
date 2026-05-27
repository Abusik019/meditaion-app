export interface ILoginResponse {
  data: {
    token: string;
    user: {
      email: string;
      id: number;
      username: string;
    };
  };
}

export interface IRegisterResponse {
  email: string;
  id: number;
  username: string;
}
