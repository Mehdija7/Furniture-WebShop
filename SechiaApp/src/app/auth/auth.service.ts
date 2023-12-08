import { Injectable } from '@angular/core';
import { AuthenticationHelper } from '../Modules/Shared/Helpers/Authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    return AuthenticationHelper.getLoginInfo().isLoggedIn ?? false
  }

  isSeller(): boolean {
    return AuthenticationHelper.getLoginInfo().token.user.isSeller ?? false
  }

  isAdmin(): boolean {
    return AuthenticationHelper.getLoginInfo().token.user.isAdmin ?? false
  }
}
