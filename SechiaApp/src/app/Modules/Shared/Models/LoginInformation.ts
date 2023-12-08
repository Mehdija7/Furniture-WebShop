export class LoginInformation {
  token: AuthenticationToken;
  isLoggedIn: boolean;
}

export interface AuthenticationToken {
  id: number;
  value: string;
  userId: number;
  user: User;
  time: Date;
  ipAddress: string;
}
export interface User {
  id: number;
  password: string;
  isCustomer: boolean;
  isSeller: boolean;
  isAdmin: boolean;
  email: string;
  phoneNumber: string;
}



