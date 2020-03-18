import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RfidListComponent } from './rfid-list/rfid-list.component';
import { RfidService } from './rfid.service';
import { RouterModule , ActivatedRoute,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  
   
    RfidListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'rfid-list' ,component:RfidListComponent},
      
    ]

    ) 
  ],
  providers: [RfidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
