import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  users:any;
  constructor(private abcHttp:HttpClient){}

  ngOnInit(){
    let res=this.abcHttp.get("https://jsonplaceholder.typicode.com/users");
    res.subscribe(
    resData =>this.users = resData
    );
  }


}