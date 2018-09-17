import { Injectable } from '@angular/core';

import { USER_LIST, USER_INFO, MESSAGES_HISTORY } from './mock-user-list';
import { User } from './user';
import { UserFullInfo } from './user-full-info';

@Injectable()
export class UserService {
  messagesHistory: object;

  constructor() {
    this.messagesHistory = Object.assign({}, MESSAGES_HISTORY);
  }

  getUserList(): Promise<User[]> {
    return Promise.resolve(USER_LIST);
  }

  getUserFullInfo() {
    return Promise.resolve(USER_INFO);
  }

  getUserInfo(login: string): Promise<UserFullInfo> {
    return this.getUserFullInfo().then(info => info[login]);
  }

  getUserChat(login: string) {
    return Promise.resolve(this.messagesHistory[login]);
  }

  addUserMessage(login: string, text: string) {
    this.messagesHistory[login].messages.push( { type: 'outgoing', text: text} );
  }
}

