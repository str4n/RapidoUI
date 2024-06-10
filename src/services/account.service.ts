import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpCommand } from '../models/signUpCommand';
import { ErrorResponse } from '../models/errorResponse';

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
  baseUrl = "http://localhost:5000/users-service"

  constructor(private http: HttpClient) { }

  signUpIndividual(model: SignUpCommand) {
    model.accountType = "Individual";
    return this.http.post<any>(this.baseUrl + "/sign-up", model, { headers: httpOptions.headers })
  }
}
