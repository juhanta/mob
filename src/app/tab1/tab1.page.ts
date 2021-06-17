import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage-angular'
import { Lecture } from '../models/lecture';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  
  
  constructor(private navCtrl:NavController, private dataService:DataService, private storage: Storage) {

  }
  
  async ngOnInit() {
    await this.storage.create()
    await this.dataService.setUpData();
    await this.dataService.load();
    

  }
  addComment(lecture: Lecture){
    this.navCtrl.navigateForward(['/tabs/lecture-detail',{id: lecture.id}])
  }

}
