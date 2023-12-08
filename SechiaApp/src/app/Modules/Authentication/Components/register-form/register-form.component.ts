import {Component} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {City} from '../../../Shared/Models/City';
import {CitiesService} from "../../../Shared/Services/CitiesService";
import {RegistrationService} from "../../Services/RegistrationService";
import {CustomerAdd} from "../../Models/CustomerAdd";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      cityId: new FormControl(1, [Validators.required])
    })
  })
  cities: City[] = []
  postalCode = ""
  private registrationService: RegistrationService
  private citiesService: CitiesService
  private router: Router
  private formSubmitted: boolean = false;

  constructor(
    registrationService: RegistrationService,
    citiesService: CitiesService,
    router: Router
  ) {
    this.citiesService = citiesService
    this.registrationService = registrationService
    this.router = router
    this.fetchCities()
  }

  fetchCities() {
    this.citiesService.getCities().subscribe(cities => {
      this.cities = cities
      this.updatePostalCode()
    })
  }

  getSelectedCity(): City {
    let id = this.registerForm.controls.address.controls.cityId.value
    let city = this.cities.find((city) => {
      return city.id == id
    })
    return city as City
  }

  onSubmit() {
    if (this.registerForm.valid && !this.formSubmitted) {
      this.registerCustomer()
    }
  }

  registerCustomer() {
    this.formSubmitted = true
    this.registrationService.registerCostumer(this.registerForm.value as CustomerAdd)
      .subscribe({
        next: response => {
          this.router.navigate(["/login"])
        },
        error: error => {
          alert(error.title)
        }
      })
  }

  onCitySelected() {
    this.updatePostalCode()
  }

  updatePostalCode() {
    this.postalCode = this.getSelectedCity().postalNumber
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

  isStreetInvalid(): boolean {
    return this.isInvalid(this.registerForm.controls.address.controls.street)
  }

  isInvalid(formControl: FormControl): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }
}
