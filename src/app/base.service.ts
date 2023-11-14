import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
 url="http://localhost:3000/noveny"
 mUrl="http://localhost:3000/rendeles"

  
 constructor(private http:HttpClient) { }

 getPlants(){
  let obs= this.http.get(this.url)
  return obs
 }
 addOrders(body:any){
  return this.http.post(this.mUrl, body)
 }
}