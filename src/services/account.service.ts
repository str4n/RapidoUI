import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpCommand } from '../models/signUpCommand';
import { ErrorResponse } from '../models/errorResponse';
import { LogInCommand } from '../models/loginCommand';
import { UserAuthInfo } from '../models/UserAuthInfo';
import { BehaviorSubject, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = "http://localhost:5000/users-service";
  userInfoKey = 'userInfo';
  private currentUserInfoSource = new BehaviorSubject<UserAuthInfo | null>(null);
  currentUserInfo = this.currentUserInfoSource.asObservable();

  constructor(private http: HttpClient) { }

  signUpIndividual(command: SignUpCommand) {
    command.accountType = "Individual";
    return this.http.post<any>(this.baseUrl + "/sign-up", command, { headers: httpOptions.headers })
  }

  logIn(command: LogInCommand) {
    return this.http
    .post<UserAuthInfo>(this.baseUrl + "/sign-in", command, { headers: httpOptions.headers })
    .pipe(map((response: UserAuthInfo) => {
      const userInfo = response;
      if (userInfo) {
        this.setCurrentUserInfo(userInfo);
      }
    }))
  }

  logOut() {
    localStorage.removeItem(this.userInfoKey);
    this.currentUserInfoSource.next(null);
  }

  setCurrentUserInfo(userInfo: UserAuthInfo) {
    localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));
    this.currentUserInfoSource.next(userInfo);
  }
}
