import {Component, OnInit} from '@angular/core';
import {ValidateService} from "@app/core/services/validate.service";
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  username: string;
  confirmPassword : string;
  emailPattern : string = "/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/";

  constructor(private validateService: ValidateService,
              public toastService: ToastService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    if (!this.validateService.validateRegister(user)) {
      this.toastService.show(EToastSeverities.INFO, 'Please fill in all fields');
      setTimeout(async () => await this.router.navigate(['/dashboard']), 1000);
      return false;
    }

    // register
    this.authService.registerUser(JSON.stringify(user))
      .subscribe(
        async (data: any) => {
          this.toastService.show(EToastSeverities.INFO, `A verification email has been sent to ${data.user.userEmail}`);
          setTimeout(async () => await this.router.navigate(['/login']), 1000);
        },
        err => {
          console.error(err.error);
          this.toastService.show(EToastSeverities.ERROR, 'Something went wrong');
        });
  }
}
