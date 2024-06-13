import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AccountService } from '../services/account.service';
import { UserAuthInfo } from '../models/UserAuthInfo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Rapido';
 
  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.setCurrentUserInfo();
  }

  setCurrentUserInfo() {
    const userInfoString = localStorage.getItem(this.accountService.userInfoKey);
    if (!userInfoString)
    {
      return;
    }

    const userInfo: UserAuthInfo = JSON.parse(userInfoString);
    this.accountService.setCurrentUserInfo(userInfo);
  }

}
