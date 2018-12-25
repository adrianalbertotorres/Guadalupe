import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-murcielago',
  templateUrl: './murcielago.component.html',
  styleUrls: ['./murcielago.component.css']
})
export class MurcielagoComponent implements OnInit {
  values = '';
  n:number=0;
 codificado='';
 
 onKey(event: any) { // without type info
   this.values = event.target.value;
  
   
   this.values=this.values.toLocaleUpperCase( );
   this.codificado='';
   for (var i = 0; i <= this.values.length-1; i++){
     if(this.values.charAt(i)=='M'){this.codificado=this.codificado +'0'}
     if(this.values.charAt(i)=='U'){this.codificado=this.codificado +'1'}
     if(this.values.charAt(i)=='R'){this.codificado=this.codificado +'2'}
     if(this.values.charAt(i)=='C'){this.codificado=this.codificado +'3'}
     if(this.values.charAt(i)=='I'){this.codificado=this.codificado +'4'}
     if(this.values.charAt(i)=='E'){this.codificado=this.codificado +'5'}
     if(this.values.charAt(i)=='L'){this.codificado=this.codificado +'6'}
     if(this.values.charAt(i)=='A'){this.codificado=this.codificado +'7'}
     if(this.values.charAt(i)=='G'){this.codificado=this.codificado +'8'}
     if(this.values.charAt(i)=='O'){this.codificado=this.codificado +'9'}
     if(this.values.charAt(i)!='M'&& this.values.charAt(i)!='U'&& this.values.charAt(i)!='R'&& this.values.charAt(i)!='C'&& this.values.charAt(i)!='I'&& this.values.charAt(i)!='E'&& this.values.charAt(i)!='L'&& this.values.charAt(i)!='A'&& this.values.charAt(i)!='G'&& this.values.charAt(i)!='O'){this.codificado=this.codificado + this.values.charAt(i);}
    

   }
 }
  
 constructor() {
  
  }

 ngOnInit() {
 }

}

 


