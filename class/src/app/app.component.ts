import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){}
  title = 'class';
  
  public allData:any=[];
  public message:boolean=false;
  

  getData():Observable<any>{
    return this.http.get("https://60bf32f197295a0017c4212e.mockapi.io/api/v1/employees");
  }
 onClick(){
   setTimeout
   this.message=!this.message;
   this.getData().subscribe(
     data=>{
       console.log(data);
       this.allData=data;
     }
   )
 }
 
}
