import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'Chats'
})
@Component({
  selector: 'page-chats-list',
  templateUrl: 'chats-list.html',
})
export class ChatsListPage {

  searchQuery: string = '';
  chats;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.chats = [
      { id: 1, name: 'Name 1', status: true, image: '../../assets/imgs/placeholder.jpg' },
      { id: 2, name: 'Name 2', status: false, image: '../../assets/imgs/placeholder.jpg' },
      { id: 3, name: 'Name 3', status: true, image: '../../assets/imgs/placeholder.jpg' },
      { id: 4, name: 'Name 4', status: false, image: '../../assets/imgs/placeholder.jpg' },
      { id: 5, name: 'Name 5', status: true, image: '../../assets/imgs/placeholder.jpg' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsListPage');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.chats = this.chats.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  open(page, param){
    this.navCtrl.push(page, { item: param })
  }
}
