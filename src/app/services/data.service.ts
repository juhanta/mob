import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'
import { Lecture } from '../models/lecture';
import {format} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public lectures : Array<Lecture> = [];
  public dates = [];
  public startDates = [];
  constructor(private storage: Storage) { }

  private mock = [{"id":1,"name":"Programmeerimine","date":"2021-06-16T12:20:31Z", "duration":45, "lecturer":"Kellsie Skyner","comment":null,"personalComment":"Tunnitöö lõpetada"},
  {"id":2,"name":"Kasutajaliidese disain","date":"2021-06-16T14:20:31Z", "duration":45,"lecturer":"Ddene Blacksell","comment":null,"personalComment":null},
  {"id":3,"name":"ELU","date":"2021-06-16T12:20:31Z", "duration":45,"lecturer":"Filmore Agron","comment":null,"personalComment":null},
  {"id":4,"name":"Mobiilirakenduste arendamine","date":"2021-06-16T12:20:31Z", "duration":45,"lecturer":"Melisandra Dyshart","comment":null,"personalComment":null},
  {"id":5,"name":"Mobiilirakenduste arendamine","date":"2021-06-16T12:20:31Z", "duration":45,"lecturer":"Uta Boncoeur","comment":null,"personalComment":null},
  {"id":6,"name":"Programmeerimine","date":"2021-06-16T12:20:31Z", "duration":45,"lecturer":"Stacee Bruckmann","comment":null,"personalComment":null},
  {"id":7,"name":"Inglise keel","date":"2021-06-16T12:20:31Z", "duration":45,"lecturer":"Gerald Nevison","comment":null,"personalComment":null},
  {"id":8,"name":"Inglise keel","date":"2021-06-16T12:20:31Z", "duration":45,"lecturer":"Mahmoud Benyan","comment":null,"personalComment":null},
  {"id":9,"name":"Inglise keel","date":"2021-06-17T12:20:31Z", "duration":45,"lecturer":"Justine Pantone","comment":null,"personalComment":null},
  {"id":10,"name":"Programmeerimine","date":"2021-06-17T13:20:31Z", "duration":45,"lecturer":"Olympie Chaize","comment":null,"personalComment":null},];

  async setUpData(){
    await this.storage.set('lectures', this.mock)
    console.log(this.storage.get('lectures'))
  }

  async load(){
    const mockData = await this.storage.get('lectures')
    if(mockData != null){
      this.lectures = mockData
      console.log(mockData)  
    }else{
      this.lectures = []
        
    }
  
    
    this.dates = [...new Set(this.lectures.map(item => new Date(item.date).toLocaleDateString('en-GB')))]

    this.lectures.forEach(lecture => {
      let endDate = new Date(lecture.date)
      lecture.date = new Date(lecture.date)
      this.startDates.push({title: lecture.name, startTime: new Date(lecture.date), endTime: new Date (endDate.setMinutes(endDate.getMinutes() + lecture.duration)), allDay:false })
      
    })
    console.log(this.startDates)
  }

  getIndex(id:number):number {
    if (this.lectures != null){
    return this.lectures.findIndex(x => x.id == id);
    }
    return -1
  }

  get(id: number): Lecture{
    return this.lectures.filter(x => x.id == id)[0];
    
  }

  deleteComment(lecture) {
    const index = this.getIndex(lecture.id);
    this.lectures[index].personalComment = null;
    
  }

  save(lecture: Lecture){
    const index = this.getIndex(lecture.id);

    if (index === -1){
      console.log("no such lecture")
    }
    else{ 
      console.log("Save comment")
      this.lectures[index] = lecture;
      this.lectures[index].date = new Date(this.lectures[index].date)
    }
    this.storage.set('lectures', this.lectures);
    
  }
}



