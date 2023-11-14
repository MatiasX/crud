import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-noveny',
  templateUrl: './noveny.component.html',
  styleUrls: ['./noveny.component.css']
})
export class NovenyComponent {
  plants:any
  showError=false
  errorMessage=""

  oszlopok=[
    {key:"price",text:"Ár", type:"number"},
    {key:"image_url",text:"Kép", type:"image"},
    {key:"description",text:"Leírás", type:"textarea"},
    {key:"name",text:"Név", type:"text"},
  ]


  constructor(
    private base:BaseService, 
    private kosar:BasketService
    ){
    this.base.getPlants().subscribe({
      next: (adatok)=>{this.showError=false; this.plants=adatok,
      console.log(adatok)},
      error: (e)=> {this.showError=true; this.errorMessage=e.message
      }
     } )

  }

  kosarba(id:any,db:any){
    this.kosar.addTetel(id,db)
  }

}