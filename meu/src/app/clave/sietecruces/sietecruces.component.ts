import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sietecruces',
  templateUrl: './sietecruces.component.html',
  styleUrls: ['./sietecruces.component.css']
})
export class SietecrucesComponent implements OnInit {

  values = '';
  n:number=0;
 codificado='';
   lista:any=[];;
 
 onKey(event: any) { // without type info
   this.values = event.target.value;
  
   
   this.values=this.values.toLocaleUpperCase( );
   this.codificado='';
   this.lista=[];
   for (var i = 0; i <= this.values.length-1; i++){
    /* Alt 250 = punto medio */
    this.codificado=this.codificado + this.values.charAt(i)
    this.lista[i]=this.values.charAt(i)
  }
  }


  constructor() { }

  ngOnInit() {
  }

}
