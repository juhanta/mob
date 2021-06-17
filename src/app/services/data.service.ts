import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'
import { Lecture } from '../models/lecture';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public lectures : Array<Lecture> = [];
  public dates = [];
  constructor(private storage: Storage) { }

  private mock = [{"id":1,"name":"Firat (Euphrates) University","date":"09/07/2020","lecturer":"Kellsie Skyner","comment":null,"personalComment":null},
  {"id":2,"name":"Université de Ngaoundéré","date":"09/07/2020","lecturer":"Ddene Blacksell","comment":null,"personalComment":null},
  {"id":3,"name":"Universitas Kristen Petra","date":"09/07/2020","lecturer":"Filmore Agron","comment":null,"personalComment":null},
  {"id":4,"name":"Nakamura Gakuen University","date":"10/07/2020","lecturer":"Melisandra Dyshart","comment":null,"personalComment":null},
  {"id":5,"name":"Miyazaki University","date":"10/07/2020","lecturer":"Uta Boncoeur","comment":null,"personalComment":null},
  {"id":6,"name":"Central Buganda University","date":"10/07/2020","lecturer":"Stacee Bruckmann","comment":null,"personalComment":null},
  {"id":7,"name":"Royal University of Agriculture","date":"10/07/2020","lecturer":"Gerald Nevison","comment":null,"personalComment":null},
  {"id":8,"name":"Military Institute of Science and Technology","date":"10/07/2020","lecturer":"Mahmoud Benyan","comment":null,"personalComment":null},
  {"id":9,"name":"Webster University, Vienna","date":"11/07/2020","lecturer":"Justine Pantone","comment":null,"personalComment":null},
  {"id":10,"name":"Guangzhou Normal University","date":"11/07/2020","lecturer":"Olympie Chaize","comment":null,"personalComment":null},
  {"id":11,"name":"Ling Tung University","date":"11/07/2020","lecturer":"Emilia Tavner","comment":null,"personalComment":null},
  {"id":12,"name":"Kibi International University","date":"11/07/2020","lecturer":"Tamarra Duckett","comment":null,"personalComment":null},
  {"id":13,"name":"Chaudhary Charan Singh University","date":"11/07/2020","lecturer":"Doroteya Endrizzi","comment":null,"personalComment":null},
  {"id":14,"name":"Universidad Politécnica de El Salvador","date":"01/08/2020","lecturer":"Jackquelin Depport","comment":null,"personalComment":null},
  {"id":15,"name":"Vikrama Simhapuri University","date":"01/08/2020","lecturer":"Beverie Fealty","comment":null,"personalComment":null},
  {"id":16,"name":"Shokei College","date":"01/08/2020","lecturer":"Herb Kershow","comment":null,"personalComment":null},
  {"id":17,"name":"Hochschule Mittweida (FH)","date":"01/08/2020","lecturer":"Timothea Drane","comment":null,"personalComment":null},
  {"id":18,"name":"University of Great Falls","date":"01/08/2020","lecturer":"Vince Sebring","comment":null,"personalComment":null},
  {"id":19,"name":"Gretsa Universtiy","date":"02/08/2020","lecturer":"Theodosia Torns","comment":null,"personalComment":null},
  {"id":20,"name":"Mustafa Kemal University","date":"02/08/2020","lecturer":"Nola Ricks","comment":null,"personalComment":null},];

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
  
     
    this.dates = [...new Set(this.lectures.map(item => item.date))]

    console.log(this.lectures)
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


  save(lecture: Lecture){
    const index = this.getIndex(lecture.id);

    if (index === -1){
      console.log("no such lecture")
    }
    else{ 
      console.log("Save comment")
      this.lectures[index] = lecture;
    }
    this.storage.set('lectures', this.lectures);
  }
}
