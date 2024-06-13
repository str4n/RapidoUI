import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-account-selection',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './account-selection.component.html',
  styleUrl: './account-selection.component.css'
})
export class AccountSelectionComponent {
  selectedAccountType: string = '';

  constructor(private router: Router) {}

  selectIndividual() {
    this.selectedAccountType = "individual";
  }

  selectCorporate() {
    this.selectedAccountType = "corporate";
  }


  navigateToSignUp() {
    const route = this.selectedAccountType === 'individual' ?
      '/sign-up/individual' : '/sign-up/corporate';
    this.router.navigate([route]);
  }
}