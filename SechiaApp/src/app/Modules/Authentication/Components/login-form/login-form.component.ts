import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {LoginService} from "../../Services/LoginService";
import {UserLogin} from "../../Models/UserLogin";
import {AuthenticationHelper} from "../../../Shared/Helpers/Authentication";
import {AuthenticationToken} from "../../../Shared/Models/LoginInformation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public isValidate: boolean = true;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  private loginService: LoginService;
  private router: Router;

  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService;
    this.router = router;
  }

  onSubmit() {
    this.loginUser();
  }

  loginUser() {
    this.loginService.loginUser(this.loginForm.value as UserLogin)
      .subscribe(user => {
          AuthenticationHelper.setLoginInfo(user);
          let loginInfo = AuthenticationHelper.getLoginInfo();
          if (loginInfo.isLoggedIn) {
            if (loginInfo.token.user.isAdmin) {
              this.router.navigate(["/admin"])
            }
            else if (loginInfo.token.user.isSeller) {
              this.router.navigate(["/admin"])
            } else {
              this.router.navigate(["/home"])
            }
            this.isValidate = true;
          }
          else {
            this.isValidate = false;
          }
        }
      );
  }
}
