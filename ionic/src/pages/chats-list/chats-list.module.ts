import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsListPage } from './chats-list';

@NgModule({
  declarations: [
    ChatsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsListPage),
  ],
})
export class ChatsListPageModule {}
