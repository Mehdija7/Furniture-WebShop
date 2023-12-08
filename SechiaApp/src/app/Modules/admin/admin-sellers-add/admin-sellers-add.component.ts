import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../../Authentication/Services/RegistrationService";
import {CustomerAdd} from "../../Authentication/Models/CustomerAdd";
import {SellerAdd} from "../../Authentication/Models/SellerAdd";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-sellers-add',
  templateUrl: './admin-sellers-add.component.html',
  styleUrls: ['./admin-sellers-add.component.css']
})
export class AdminSellersAddComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    gender: new FormControl('',[Validators.required]),
    jmbg: new FormControl('',[Validators.required]),
    birthDate: new FormControl(Date.toString(),[Validators.required]),
    isAdmin: new FormControl(false)
  })
  private registrationService: RegistrationService
  private formSubmitted: boolean = false;
  private router: Router;

  constructor(registrationService: RegistrationService, router:Router) {
    this.registrationService=registrationService
    this.router=router
  }

  isNameInvalid(): boolean {
    return this.isInvalid(this.registerForm.controls.name)
  }

  isSurnameInvalid(): boolean {
    return this.isInvalid(this.registerForm.controls.surname)
  }

  isEmailInvalid(): boolean {
    return this.isInvalid(this.registerForm.controls.email)
  }

  isPhoneNumberInvalid(): boolean {
    return this.isInvalid(this.registerForm.controls.phoneNumber)
  }

  isPasswordInvalid(): boolean {
    return this.isInvalid(this.registerForm.controls.password)
  }
  isJMBGInvalid() {
     return this.isInvalid(this.registerForm.controls.jmbg)
  }
  isGenderInvalid(): boolean {
    return this.isInvalid(this.registerForm.controls.gender)
  }
  isDateInvalid() {
    return this.isInvalid(this.registerForm.controls.birthDate)
  }
  isInvalid(formControl: FormControl): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }
  onSubmit() {
    if (!this.formSubmitted) {
      this.registerSeller()
    }
  }

  private registerSeller() {
    this.registrationService.registerSeller(this.registerForm.value as SellerAdd).subscribe({
      next: response => {
        this.router.navigate(["/admin"])
      },
      error: error => {
        alert(error.title)
      }
    })
  }

}
