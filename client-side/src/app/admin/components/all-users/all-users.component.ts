import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users = [];
  email = '';
  username= '';
  usernames= '';
  password= '';

  confirmPassword= '';
  userId= '';
  alertMessage: string = "";

  searchValue: string = "";

  constructor(private authService: AuthService,
              public toastService: ToastService,
              private router: Router
  ) {
  }

  ngOnInit() {


    if (!this.authService.getAllProfiles() ||
      (JSON.parse(localStorage['user']).role !== 'admin' &&
        JSON.parse(localStorage['user']).role !== 'teacher')) {
      this.authService.logout();
      this.toastService.show(EToastSeverities.INFO, 'Redirected to login page !');
      this.router.navigate(['/login']);
    }

    this.authService.getAllProfiles()?.toPromise()
      .then((data: any) => {
        this.users = data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getUpdateId(event: any) {
    this.userId = event.name;
    if (this.users){
      this.usernames =  this.users.find(x => x._id === event.name).username;
    }
  }

  getDeleteId(event: any) {
    this.userId = event.id;
  }

  onUpdateAllUser() {
    const user = {
      "username": this.username,
      "email": this.email,
      "password": this.password
    };

    this.authService.updateUser(this.userId, user)?.toPromise()
      .then((data: any) => {
        this.ngOnInit();
        this.alertMessage = `${data.message}`;
      })
      .catch(err => {
        console.log(err);
        this.alertMessage = "Something went wrong !";
      });
    this.alertMessage = "";
  }

  onDeleteUser() {
    this.authService.deleteUser(this.userId)
      .toPromise()
      .then((data: any) => {
        this.ngOnInit();
        this.alertMessage = `${data.message}`;
      })
      .catch(err => {
        console.log(err);
        this.alertMessage = "Something went wrong !";
      });
    this.alertMessage = "";
  }
}
