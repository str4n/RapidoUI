import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-my-account',
  standalone: true,
  imports: [],
  templateUrl: './navbar-my-account.component.html',
  styleUrl: './navbar-my-account.component.css'
})
export class NavbarMyAccountComponent {
  
  constructor(private accountService:AccountService, private router:Router) {
  }

  logOut() {
    this.accountService.logOut();
    this.router.navigate(['']);
  }
}
