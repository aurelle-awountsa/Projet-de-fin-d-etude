import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private authService: AuthService,
              public toastService: ToastService,
              private router: Router
  ) {
  }

  ngOnInit() {
    if (this.authService.getProfile() === undefined) {
        this.authService.logout();
      this.toastService.show(EToastSeverities.INFO, 'You need to log in !');
      this.router.navigate(['/login']);
    }
  }


}
