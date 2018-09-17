import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];
  selectedUser: string;

  @Input()view: string;
  @Input()selectedLogin: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUserList();
    this.selectedUser = this.selectedLogin;
  }

  getUserList(): void {
    this.userService.getUserList().then(userList => this.userList = userList);
  }

  swapPage(user: User): void {
    if (this.selectedUser === user.login) {
      this.router.navigate(['/users']);
    } else if (this.view === 'middle' || this.view === 'large') {
      this.selectedUser = user.login;
      this.router.navigate(['/users', user.login, 'info']);
    } else if (this.view === 'small') {
      this.selectedUser = user.login;
      this.router.navigate(['/users', user.login, 'chat']);
    }
  }
}
