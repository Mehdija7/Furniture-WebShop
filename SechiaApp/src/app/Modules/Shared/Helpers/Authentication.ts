import {LoginInformation} from "../Models/LoginInformation";

export class AuthenticationHelper {

  static setLoginInfo(x: LoginInformation): void {
    if (x == null) {
      x = new LoginInformation();
    }
    localStorage.setItem("authentication-token", JSON.stringify(x));
  }

  static getLoginInfo(): LoginInformation {
    let x = localStorage.getItem("authentication-token");
    if (x === "") {
      return new LoginInformation();
    }

    try {
      let loginInformation: LoginInformation = JSON.parse(
        localStorage.getItem("authentication-token") || '{}'
      );
      if (loginInformation == null) {
        return new LoginInformation();
      }
      return loginInformation;
    } catch (e) {
      return new LoginInformation();
    }
  }
}
