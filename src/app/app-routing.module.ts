import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UsersInfoComponent } from './users-info/users-info.component';
import { UserChatComponent } from './user-chat/user-chat.component';

const appRouts: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:login/info', component: UsersInfoComponent },
  { path: 'users/:login/chat', component: UserChatComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRouts) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
