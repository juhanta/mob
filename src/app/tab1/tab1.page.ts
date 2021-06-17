import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  
  
  constructor(private navCtrl:NavController, private dataService:DataService) {

  }
  
  ngOnInit() {
    this.dataService.load();

  }
  addComment(lecture){
    this.navCtrl.navigateForward(['/tabs/lecture-detail',{id: lecture.id}])
  }

}
