import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Object;
  token: any;
  userId: any;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;

  alertMessage : string  = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    public toastService: ToastService) {
  }


  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    if (this.authService.getAllProfiles() === undefined) {
      this.authService.logout();
      this.toastService.show(EToastSeverities.INFO, 'You need to log in !');
      this.router.navigate(['/login']);
    } else {
      this.authService.getProfile().subscribe(
        (profile: any) => {
          this.user = profile.user;
          this.email = profile.user.email;
          this.username = profile.user.username;
          this.username = profile.user.username;
          this.authService.username =
            JSON.parse(localStorage.getItem('user')).username;
        },
        err => {
          console.log(err);
          return false;
        }
      );
    }
  }

  onUpdateUser() {
    const user = {
      "username": this.username,
      "email": this.email,
      "password": this.password
    };

    this.authService.updateUser(this.authService.userId, user)
      .toPromise()
      .then((data: any) => {
        this.getUserProfile();
        this.alertMessage = `${data["message"]} !`;
      })
      .catch(err => {
        this.alertMessage = "Something went wrong !";
        console.log(err);
      });

  }

  closeAlert() {
    this.alertMessage = "";
  }
}

