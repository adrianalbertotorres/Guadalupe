import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parelinofu',
  templateUrl: './parelinofu.component.html',
  styleUrls: ['./parelinofu.component.css']
})
export class ParelinofuComponent implements OnInit {

  values = '';
  n:number=0;
 codificado='';
 
 onKey(event: any) { // without type info
   this.values = event.target.value;
  
   
   this.values=this.values.toLocaleUpperCase( );
   this.codificado='';
   for (var i = 0; i <= this.values.length-1; i++){
     if(this.values.charAt(i)=='P'){this.codificado=this.codificado +'A'}
     if(this.values.charAt(i)=='A'){this.codificado=this.codificado +'P'}
     if(this.values.charAt(i)=='R'){this.codificado=this.codificado +'E'}
     if(this.values.charAt(i)=='E'){this.codificado=this.codificado +'R'}
     if(this.values.charAt(i)=='L'){this.codificado=this.codificado +'I'}
     if(this.values.charAt(i)=='I'){this.codificado=this.codificado +'L'}
     if(this.values.charAt(i)=='N'){this.codificado=this.codificado +'O'}
     if(this.values.charAt(i)=='O'){this.codificado=this.codificado +'N'}
     if(this.values.charAt(i)=='F'){this.codificado=this.codificado +'U'}
     if(this.values.charAt(i)=='U'){this.codificado=this.codificado +'F'}
     if(this.values.charAt(i)!='P'&& this.values.charAt(i)!='A'&& this.values.charAt(i)!='R'&& this.values.charAt(i)!='E'&& this.values.charAt(i)!='L'&& this.values.charAt(i)!='I'&& this.values.charAt(i)!='N'&& this.values.charAt(i)!='O'&& this.values.charAt(i)!='F'&& this.values.charAt(i)!='U'){this.codificado=this.codificado + this.values.charAt(i);}
    
   }
   
  }
  constructor() { }
  

  ngOnInit() {
  }

}
