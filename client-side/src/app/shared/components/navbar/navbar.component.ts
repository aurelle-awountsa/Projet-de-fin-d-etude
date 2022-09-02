import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {ValidateService} from "@app/core/services/validate.service";
import {BehaviorSubject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any;
  userId: any;
  username: string = "";

  currentLang$: BehaviorSubject<string>;
  languages = ['en', 'fr'];

  constructor(private validateService: ValidateService,
              public toastService: ToastService,
              private readonly translateService: TranslateService,
              public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

    if (localStorage.getItem('user')) {
      this.authService.role = JSON.parse(localStorage.getItem('user')).role;
      this.authService.username =
        JSON.parse(localStorage.getItem('user')).username;
    }

    this.translateService.use('en');
  }

  updateLanguage(event) {
    if (event.checked) {
      this.translateService.use('de');
    } else {
      this.translateService.use('en');
    }
  }

  public initLanguage(): void {
    this.translateService.addLangs(this.languages);
    const browserLang = this.translateService.getBrowserLang();
    this.currentLang$.next(browserLang?.match(/en|de/) ? browserLang : 'en');
    this.translateService.use(this.currentLang$.value);
  }

  onSelect() {
    this.authService.getProfile().subscribe(
      (profile: any) => {
        `${this.router.navigate(['/profile', profile.user.username])}`
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }

  async onLogOutClick() {

    if (!Object.keys(localStorage).includes('id_token')) {
      this.authService.logout();
      this.toastService.show(EToastSeverities.INFO, 'Please log in first');
      return false;
    } else {
      this.authService.logout();
      this.toastService.show(EToastSeverities.INFO, 'You are logged out !');
      await this.router.navigate(['/login']);
      return false;
    }
  }
}
