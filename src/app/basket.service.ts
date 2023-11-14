import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  
  private kosar:any=[]
  private kosarTartalma = new Subject()
  private kosarTartalmaBehav = new BehaviorSubject(this.kosar)

  constructor() { }

  getKosar(){
    return this.kosarTartalma
  }
  getKosarBehav(){
    return this.kosarTartalmaBehav
  }
  
  frissulKosar(){
    this.kosarTartalma.next(this.kosar)
    this.kosarTartalmaBehav.next(this.kosar)
  }

  addTetel(id:any, db:any){

    let van= this.kosar.findIndex(
      (e:any)=>e.id==id
    )

    if (van>=0){
      this.kosar[van].db=db
    }
    else {     
      let tetel= {id:id, db:db}
      this.kosar.push(tetel)
    }
    this.frissulKosar()
  }

  tetelTorlese(tetel:any){
    this.kosar=this.kosar.filter( (t:any)=> t!=tetel)
    this.frissulKosar()
  }
}