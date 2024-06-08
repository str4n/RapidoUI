import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sign-up-individual',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up-individual.component.html',
  styleUrl: './sign-up-individual.component.css'
})
export class SignUpIndividualComponent {
  signUpForm: FormGroup;
  submitted:boolean = false;

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get repeatPassword() {
    return this.signUpForm.get('repeatPassword');
  }

  constructor(private accountService: AccountService) {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]), 
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      repeatPassword: new FormControl(null, [Validators.required])})
  }
  
  onSubmit(): void {
    this.submitted = true;

    this.accountService.signUp({email: this.signUpForm.value.email, password: this.signUpForm.value.password}).subscribe({next: response => {
      console.log(response);
    }});
  }
}