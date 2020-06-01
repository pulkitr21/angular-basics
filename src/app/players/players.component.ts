import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any;
  searchName:string="";

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp=this.http.get("https://demo4690221.mockable.io/getPlayersHistory");

    resp.subscribe((data)=>{
      this.players=data;
      console.log(this.players);
    })
  }

}
