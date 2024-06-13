import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogInCommand } from '../../models/loginCommand';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  logInForm: FormGroup;
  submitted: boolean = false;
  succeded: boolean = false;
  errorMessage: string = '';

  constructor(private accountService: AccountService, public router: Router) {
    this.logInForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]), 
      password: new FormControl("", [Validators.required])})
  }

  onSubmit() {
    const valid = this.logInForm.valid;
    this.submitted = true;

    if (valid && this.submitted)
    {
      const model:LogInCommand = {email: this.logInForm.value.email, password: this.logInForm.value.password,} 
      this.accountService.logIn(model).subscribe({next: response => {
        this.succeded = true;
        this.router.navigate(['/my-account/summary'])
      }, error: err => {
        this.errorMessage = err.error.error.reason;
      }});
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up/account-selection'])
  }

  navigateToPasswordRecovery() {
    this.router.navigate(['password-recovery'])
  }
}
