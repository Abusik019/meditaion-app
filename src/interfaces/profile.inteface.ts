export interface IProfile {
  email: string;
  id: number;
  last_login_at: string;
  username: string;
}

export interface IProfileResponse {
  data: {
    user: IProfile;
  };
  status: string;
}
