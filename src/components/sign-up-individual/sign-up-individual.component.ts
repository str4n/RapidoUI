import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { SignUpCommand } from '../../models/signUpCommand';
import { Router } from '@angular/router';

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
  succeded: boolean = false;
  errorMessage: string = '';
  errorCode: string = '';

  constructor(private accountService: AccountService, private router: Router) {
    this.signUpForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]), 
      password: new FormControl("", [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      repeatPassword: new FormControl("", [Validators.required])
    }, {validators: matchPasswordValidator})
  }
  
  onSubmit(): void {
    const valid = this.signUpForm.valid;
    this.submitted = true;

    if (valid && this.submitted)
    {
      let model:SignUpCommand = {email: this.signUpForm.value.email, password: this.signUpForm.value.password, accountType: ''};
      this.accountService.signUpIndividual(model).subscribe({next: response => {
        this.succeded = true;
        this.router.navigate(['/log-in'])
      }, error: err => {
        this.errorMessage = err.error.error.reason;
        console.log(err.error.error);
      }});
    }
  }
}

const matchPasswordValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');

  return password && repeatPassword && password.value !== repeatPassword.value
    ? { passwordNotMatch: true }
    : null;
};