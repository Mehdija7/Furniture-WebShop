import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLogin} from "../Models/UserLogin";
import {LoginInformation} from "../../Shared/Models/LoginInformation";
import {BaseService} from "../../Base/BaseService";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  loginUser(userLogin: UserLogin) {
    return this.post<LoginInformation>('login', userLogin)
  }
}

