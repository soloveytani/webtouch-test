import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { UserService } from '../user.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {
  currentMessage = '';
  selectedLogin: string;
  userChat: object;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedLogin = params.get('login');
        return this.userService.getUserChat(params.get('login'));
      })
      .subscribe( chat => this.userChat = chat);
  }

  sendMessage(): void {
    this.currentMessage = this.currentMessage.replace(/\r?\n|\r/, '');
    if (this.currentMessage.length > 0) {
      this.userService.addUserMessage(this.selectedLogin, this.currentMessage);
      this.userService.getUserChat(this.selectedLogin).then( chat => this.userChat = chat);
      this.currentMessage = '';
    }
  }

}
