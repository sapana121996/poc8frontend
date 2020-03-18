import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RfidService {
 private url:string= "http://localhost:3000";
  constructor(private http:Http) { }
  get(){
    return this.http.get(this.url);
  }
}
