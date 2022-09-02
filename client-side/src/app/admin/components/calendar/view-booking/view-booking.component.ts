import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  user: Object;
  token: any;
  userId: any;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  bookingDetails: any;

  alertMessage: string = '';

  t = '<p-rating [(ngModel)]="val" readonly="true" stars="5" [cancel]="false"></p-rating>'

  val = 3;


  constructor(
    private authService: AuthService,
    private router: Router,
    private config: DynamicDialogConfig, public ref: DynamicDialogRef) {
    this.bookingDetails = this.config.data;
  }


  ngOnInit(): void {
    this.getUserProfile(this.bookingDetails);
  }

  getUserProfile(username) {
    this.authService.getUserByUsername(username)
      .subscribe(
        (profile: any) => {
          this.user = profile.user;
        },
        err => {
        }
      );
  }
}
