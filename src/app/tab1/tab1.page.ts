import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public lectures : Array<{id: number, name: string , date: string,  lecturer: string, comment:string, personalComment:string}> = [];
  public dates = [];
  
  constructor() {
    this.lectures.push(
      {"id":1,"name":"Firat (Euphrates) University","date":"09/07/2020","lecturer":"Kellsie Skyner","comment":null,"personalComment":null},
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
      {"id":20,"name":"Mustafa Kemal University","date":"02/08/2020","lecturer":"Nola Ricks","comment":null,"personalComment":null},
      
    )
    this.dates = [...new Set(this.lectures.map(item => item.date))]
  }
  

}
