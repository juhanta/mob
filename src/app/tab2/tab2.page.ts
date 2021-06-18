import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  d

  eventSource = [];

  viewTitle: string;
  
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  
  constructor(private dataService:DataService) {
    this.eventSource = dataService.startDates;
    console.log(this.eventSource)
    
    
  }
  ngOnInit() {
    
  }

}
