import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import { UserFullInfo } from '../user-full-info';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {
  selectedLogin: string;

  @Input() user: UserFullInfo;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedLogin = params.get('login');
        return this.userService.getUserInfo(params.get('login'));
      })
      .subscribe(user => this.user = user);
  }

  swapPage(login): void {
    this.router.navigate(['/users', login, 'chat']);
  }
}
