import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {ValidateService} from "@app/core/services/validate.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  pseudo: String;
  password: String;
  timeLoggedIn: number;
  isVerified: boolean;

  constructor(private validateService: ValidateService,
              public toastService: ToastService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      pseudo: this.pseudo,
      password: this.password
    };

    if (!this.validateService.validateLogin(user)) {

      this.toastService.show(EToastSeverities.WARN, 'Please fill in all fields !');

      return false;
    }

    this.authService.loginUser(JSON.stringify(user))
      .subscribe(
        async (data: any) => {
          this.timeLoggedIn = new Date().getTime();
          this.sessionExpired(data.token);
          this.authService.storeUserData(data);
          this.authService.role = data.user.role;
          this.authService.username = data.user.username;
          this.authService.userId = data.user.userId;
          this.authService.userEmail = data.user.userEmail;
          this.toastService.show(EToastSeverities.INFO, 'Welcome back !');
          setTimeout(async () => await this.router.navigate(['/dashboard']), 1000);
        },
        err => {
          console.log(err)
          this.isVerified = err.error?.isVerified;
          if (Object.keys(err?.error).includes("isVerified")) {
            this.toastService.show(EToastSeverities.ERROR, `${err.error.message}`);
          } else {
            this.toastService.show(EToastSeverities.ERROR, 'Incorrect credentials !');
          }
        });


  }

  sessionExpired(token: string) {
    const expirationDate = new JwtHelperService()
      .getTokenExpirationDate(token).getTime();
    const sessionExpired = expirationDate - this.timeLoggedIn;
    setTimeout(() => {
      this.authService.logout();
      this.toastService.show(EToastSeverities.WARN, 'Your session is over, you can log in back in to start a new session.');
    }, sessionExpired);
  }


  isAdmins() {
    return this.authService.role === 'admin';
  }

}
