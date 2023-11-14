import { Component } from '@angular/core';
import { BasketService } from '../basket.service';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-megrendel',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})
export class RendelesComponent {
  tetelek:any
  novenyek:any
  constructor(private kosar:BasketService,
    private base:BaseService
    ){
    this.kosar.getKosarBehav().subscribe(
      (a)=>this.tetelek=a    
  )
    this.base.getPlants().subscribe(
      (a)=>this.novenyek=a
    )
  }

  keresNoveny(id:any){
    return this.novenyek.find(
      (n:any)=> n.id==id
    )
  }

  tetelTorlese(tetel:any){
    this.kosar.tetelTorlese(tetel)
  }

  osszErtek(){
    if (this.tetelek && this.novenyek){
      let sum=0
      this.tetelek.forEach((e:any) => {
        sum+= Number(this.keresNoveny(e.id).price*e.db)
      });
      return sum
    }
    return null
  }

  valtozas(tetel:any){
    this.kosar.addTetel(tetel.id,tetel.db)
  }
  
}