import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  private router: Router

  constructor(router: Router) {
    this.router = router;
  }

  clickedSignUp() {
    this.router.navigate(["/register"])
  }

  clickedSignIn() {
    this.router.navigate(["/login"])
  }
}
