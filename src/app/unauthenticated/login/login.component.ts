import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/libraray/user.service';
import { HttpService } from 'src/app/services/http.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;
  public redirectURL: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpService,
    private notification: NotificationService,
    public userService: UserService
  ) {
    let params = this.route.snapshot.queryParams;
    if (params['redirectURL']) {
      this.redirectURL = params['redirectURL'];
    }
  }

  ngOnInit(): void {
    if (this.userService.id) {
      this.router.navigate(['/dashboard']);
    }
  }

  login(f: NgForm) {
    if (f.valid) {
      this.loading = true;
      let body: any = {
        user_name: f.value.username,
        password: f.value.password,
      };
      this.http.postRequest('login', body).subscribe(
        (response: any) => {
          if (response && response.status) {
            this.userService.id = response.response.data.id;
            this.userService.userType = response.response.data.user_type;
            this.userService.userName = response.response.data.user_name;
            this.userService.fullName = response.response.data.user_name;
            this.userService.token = response.response.data.token;
            this.userService.companyId = response.response.data.company_id;
            this.userService.companyCode = response.response.data.company_code;
            this.userService.subCompanyCode =
              response.response.data.subcompany_code;
            this.userService.accessList = response.response.data.access_list;
            this.userService.branchList = response.response.data.branch_list;
            this.userService.userBranch = response.response.data.user_branch;
            this.userService.fromYear = response.response.data.from_year;
            this.userService.fiscalYear = response.response.data.fiscal_year;
            this.userService.save();
            this.backToPreviousPage();
            this.notification.apiSuccess(response);
          }
          this.loading = false;
        },
        (error: any) => {
          this.notification.apiError(error);
          this.loading = false;
        }
      );
    }
  }

  backToPreviousPage() {
    if (this.redirectURL) {
      this.router
        .navigateByUrl(this.redirectURL)
        .catch(() => this.router.navigate(['/dashboard']));
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
