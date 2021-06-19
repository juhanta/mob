import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit {

  constructor(private dataService:DataService, private storage: Storage) {}
  


  async ngOnInit(){
    await this.storage.create()
    await this.dataService.load();
  }
 
  deleteComment(lecture){
    this.dataService.deleteComment(lecture)
    
    
  }
}