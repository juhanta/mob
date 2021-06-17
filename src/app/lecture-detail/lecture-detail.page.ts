import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.page.html',
  styleUrls: ['./lecture-detail.page.scss'],
})
export class LectureDetailPage implements OnInit {

  private lecture : {id: number, name: string , date: string,  lecturer: string, comment:string, personalComment:string};

  constructor(private route: ActivatedRoute,private navCtrl:NavController, private dataService:DataService) { 
    this.lecture = {id:0, name: '' , date: '',  lecturer: '', comment:'', personalComment:''};
  }

  ngOnInit() {
    const identifier = this.route.snapshot.paramMap.get('id');
    if(identifier != null){
      this.lecture = this.dataService.get(identifier);
      console.log(this.lecture)
    }
    console.log('Lecture: ' + identifier);
  }

  save(){
    this.dataService.save(this.lecture)
    this.navCtrl.navigateBack('/tabs/tab1')
    
  }
}
