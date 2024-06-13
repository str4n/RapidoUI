import { Component } from '@angular/core';
import { NavbarMyAccountComponent } from '../navbar-my-account/navbar-my-account.component';

@Component({
  selector: 'app-account-summary',
  standalone: true,
  imports: [NavbarMyAccountComponent],
  templateUrl: './account-summary.component.html',
  styleUrl: './account-summary.component.css'
})
export class AccountSummaryComponent {

}
