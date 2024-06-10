import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sign-up-individual',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-individual.component.html',
  styleUrl: './sign-up-individual.component.css'
})
export class SignUpIndividualComponent {
  signUpForm: FormGroup;
  submitted: boolean = false;

  constructor(private accountService: AccountService) {
    this.signUpForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]), 
      password: new FormControl("", [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      repeatPassword: new FormControl("", [Validators.required])
    }, {validators: matchPasswordValidator})
  }
  
  onSubmit() {
    const valid = this.signUpForm.valid;
    this.submitted = true;

    if (valid && this.submitted)
    {
      let model:any = {email: this.signUpForm.value.email, password: this.signUpForm.value.password};
      this.accountService.signUpIndividual(model);
    }
  }
}

export const matchPasswordValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');

  return password && repeatPassword && password.value !== repeatPassword.value
    ? { passwordNotMatch: true }
    : null;
};