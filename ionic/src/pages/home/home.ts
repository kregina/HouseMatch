import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { SwingStackComponent, StackConfig, SwingCardComponent, ThrowEvent } from 'angular2-swing';
import { Property, PropertiesProvider } from '../../providers/properties/properties';

@IonicPage({
  name: 'Home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;


  cards: Property[];
  stackConfig: StackConfig;
  detail;
  i=0;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private propertiesProvider: PropertiesProvider) {
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ngAfterViewInit() {
    this.swingStack.throwin.subscribe((event: ThrowEvent) => {
      event.target.style.background = '#ffffff';
    });

    this.cards = [];
    this.addNewCards(1);
  }

  voteUp(like: boolean) {
    let removedCard = this.cards.pop();
    let message: string;
    this.addNewCards(1);

    if (like) {
      message = 'You just like ' + removedCard.descricao;
    } else {
      message = 'You just dislike ' + removedCard.descricao;
    }

    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present(toast);
  }

  addNewCards(count: number) {
    for (let index = 0; index < count; index++) {
      this.propertiesProvider.proximo(this.i++).then(result => {
        this.cards.push(result);
      })
    }
  }

  seeDetail(){
    this.detail = !this.detail;
  }

  open(page){
    this.navCtrl.push(page);
  }

}
