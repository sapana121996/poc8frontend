import { Component, OnInit } from '@angular/core';
import { RfidService } from '../rfid.service';

@Component({
  selector: 'app-rfid-list',
  templateUrl: './rfid-list.component.html',
  styleUrls: ['./rfid-list.component.css']
})
export class RfidListComponent implements OnInit {
 temps=[];
dataRefresher:any;
  constructor(private service:RfidService) { }

  ngOnInit() {
    this.loadTemp();
    this.refreshData();
  }
  loadTemp(){
    console.log('hello');
    
    const observable =this.service.get();

     observable.subscribe((response)=>{
       const result=response.json();
       this.temps=result;
       console.log(result);
     })
  }
  
  refreshData(){
    this.dataRefresher =
      setInterval(() => {
        this.loadTemp();
        //Passing the false flag would prevent page reset to 1 and hinder user interaction
      }, 10000);  
  }

  cancelPageRefresh(){
    if(this.dataRefresher){
        clearInterval(this.dataRefresher);
    }    
}

ngOnDestroy(){
  this.cancelPageRefresh();
}
}
