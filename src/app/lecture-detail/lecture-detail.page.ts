import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';
import { parse } from 'url';
import { Lecture } from '../models/lecture';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.page.html',
  styleUrls: ['./lecture-detail.page.scss'],
})
export class LectureDetailPage implements OnInit {

  private lecture : Lecture;

  constructor(private route: ActivatedRoute,private navCtrl:NavController, private dataService:DataService) { 
    this.lecture = new Lecture();
  }

  ngOnInit() {
    const identifier = this.route.snapshot.paramMap.get('id');
    if(identifier != null){
      const item = this.dataService.get(parseInt(identifier, 10));

      this.lecture =JSON.parse(JSON.stringify(item));
      console.log(this.lecture)
    }
    console.log('Lecture: ' + identifier);
  }

  save(){
    this.dataService.save(this.lecture)
    this.navCtrl.navigateBack('/tabs/tab1')
    
  }
}
