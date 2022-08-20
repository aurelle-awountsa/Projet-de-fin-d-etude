import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  private colDefs: any;
  private gridColumnApi: any;
  searchValue: string = "";
  private gridApi: any;

  users: any;

  sortUsername: boolean = false;
  sortScore: boolean = false;
  sortEmail: boolean = false;

  constructor(
    public toastService: ToastService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {

    if (!this.authService.getAllProfiles() ||
      (JSON.parse(localStorage.getItem('user')).role !== 'admin' &&
        JSON.parse(localStorage.getItem('user')).role !== 'teacher')) {
      this.authService.logout();
      this.toastService.show(EToastSeverities.INFO, 'Redirected to login page !');
      this.router.navigate(['/login']);
    }

    this.colDefs = [
      {headerName: "Usernames", field: "username", width: 150},
      {headerName: "Email", field: "email", width: 160},
      {headerName: "Score", field: "score", width: 120},
      {headerName: "Level", field: "username", width: 120},
    ];

    this.showUsersInTable();
  }

  showUsersInTable() {
    this.authService.getAllProfiles()?.toPromise()
      .then((data: any) => {
        this.users = data.filter((x: any) => x.username !== 'admin' && x.username !== 'teacher');
      })
      .catch(err => {
        console.log(err);
      });
  }

  sortByUsername(event: any) {
    if (event.id === 'username') {
      if (this.sortUsername) {
        this.sortUsername = false;
        this.users.sort((a: any, b: any) => (a.username < b.username) ? 1
          : (a.username > b.username) ? -1 : 0);
      } else {
        this.sortUsername = true;
        this.users.sort((a: any, b: any) => (a.username > b.username) ? 1
          : (a.username < b.username) ? -1 : 0);
      }
    } else if (event.id === 'score') {
      if (this.sortScore) {
        this.sortScore = false;
        this.users.sort((a: any, b: any) => (a.score - b.score));
      } else {
        this.sortScore = true;
        this.users.sort((a: any, b: any) => (b.score - a.score));
      }

    } else if (event.id === 'email') {
      if (this.sortEmail) {
        this.sortEmail = false;
        this.users.sort((a: any, b: any) => (a.email < b.email) ? 1
          : (a.email > b.email) ? -1 : 0);
      } else {
        this.sortEmail = true;
        this.users.sort((a: any, b: any) => (a.email > b.email) ? 1
          : (a.email < b.email) ? -1 : 0);
      }
    }
  }

  onGridReady(event: any) {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
    event.api.setRowData(this.users);
  }

  quickSearch() {
    this.gridApi.setQuickFilter(this.searchValue);
  }

}
