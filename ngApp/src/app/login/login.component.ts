import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = { email: '', password: '' };

  constructor(private _auth: AuthService, private _router: Router) {}

  loginHandler() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/events']);
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
  ngOnInit(): void {}
}
