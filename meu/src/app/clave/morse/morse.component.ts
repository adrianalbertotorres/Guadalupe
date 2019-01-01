import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morse',
  templateUrl: './morse.component.html',
  styleUrls: ['./morse.component.css']
})
export class MorseComponent implements OnInit {

  values = '';
  n:number=0;
 codificado='';
 

 
 
 onKey(event: any) { // without type info
   this.values = event.target.value;
   
   const audio_A=new Audio('./../../../assets/Audio/A.wav');
   const audio_B=new Audio('./../../../assets/Audio/B.wav');
   const audio_C=new Audio('./../../../assets/Audio/C.wav');
   const audio_D=new Audio('./../../../assets/Audio/D.wav');
   const audio_E=new Audio('./../../../assets/Audio/E.wav');
   const audio_F=new Audio('./../../../assets/Audio/F.wav');
   const audio_G=new Audio('./../../../assets/Audio/G.wav');
   const audio_H=new Audio('./../../../assets/Audio/H.wav');
   const audio_I=new Audio('./../../../assets/Audio/I.wav');
   const audio_J=new Audio('./../../../assets/Audio/J.wav');
   const audio_K=new Audio('./../../../assets/Audio/K.wav');
   const audio_L=new Audio('./../../../assets/Audio/L.wav');
   const audio_M=new Audio('./../../../assets/Audio/M.wav');
   const audio_N=new Audio('./../../../assets/Audio/N.wav');
   const audio_O=new Audio('./../../../assets/Audio/O.wav');
   const audio_P=new Audio('./../../../assets/Audio/P.wav');
   const audio_Q=new Audio('./../../../assets/Audio/Q.wav');
   const audio_R=new Audio('./../../../assets/Audio/R.wav');
   const audio_S=new Audio('./../../../assets/Audio/S.wav');
   const audio_T=new Audio('./../../../assets/Audio/T.wav');
   const audio_U=new Audio('./../../../assets/Audio/U.wav');
   const audio_V=new Audio('./../../../assets/Audio/V.wav');
   const audio_W=new Audio('./../../../assets/Audio/W.wav');
   const audio_X=new Audio('./../../../assets/Audio/X.wav');
   const audio_Y=new Audio('./../../../assets/Audio/Y.wav');
   const audio_Z=new Audio('./../../../assets/Audio/Z.wav');
   const audio_1=new Audio('./../../../assets/Audio/1.wav');
   const audio_2=new Audio('./../../../assets/Audio/2.wav');
   const audio_3=new Audio('./../../../assets/Audio/3.wav');
   const audio_4=new Audio('./../../../assets/Audio/4.wav');
   const audio_5=new Audio('./../../../assets/Audio/5.wav');
   const audio_6=new Audio('./../../../assets/Audio/6.wav');
   const audio_7=new Audio('./../../../assets/Audio/7.wav');
   const audio_8=new Audio('./../../../assets/Audio/8.wav');
   const audio_9=new Audio('./../../../assets/Audio/9.wav');
   const audio_0=new Audio('./../../../assets/Audio/0.wav');

   this.values=this.values.toLocaleUpperCase( );
   this.codificado='';

   for (var i = 0; i <= this.values.length-1; i++){
     /* Alt 250 = punto medio */
     if(this.values.charAt(i)=='A'){this.codificado=this.codificado +'·- '}
     if(this.values.charAt(i)=='B'){this.codificado=this.codificado +'-··· '}
     if(this.values.charAt(i)=='C'){this.codificado=this.codificado +'-·-· '}
     if(this.values.charAt(i)=='D'){this.codificado=this.codificado +'-·· '}
     if(this.values.charAt(i)=='E'){this.codificado=this.codificado +'· '}
     if(this.values.charAt(i)=='F'){this.codificado=this.codificado +'··-· '}
     if(this.values.charAt(i)=='G'){this.codificado=this.codificado +'--· '}
     if(this.values.charAt(i)=='H'){this.codificado=this.codificado +'···· '}
     if(this.values.charAt(i)=='I'){this.codificado=this.codificado +'·· '}
     if(this.values.charAt(i)=='J'){this.codificado=this.codificado +'·--- '}
     if(this.values.charAt(i)=='K'){this.codificado=this.codificado +'-·- '}
     if(this.values.charAt(i)=='L'){this.codificado=this.codificado +'·-·· '}
     if(this.values.charAt(i)=='M'){this.codificado=this.codificado +'-- '}
     if(this.values.charAt(i)=='N'){this.codificado=this.codificado +'-· '}
     if(this.values.charAt(i)=='O'){this.codificado=this.codificado +'--- '}
     if(this.values.charAt(i)=='P'){this.codificado=this.codificado +'·--· '}
     if(this.values.charAt(i)=='Q'){this.codificado=this.codificado +'--·- '}
     if(this.values.charAt(i)=='R'){this.codificado=this.codificado +'·-· '}
     if(this.values.charAt(i)=='S'){this.codificado=this.codificado +'··· '}
     if(this.values.charAt(i)=='T'){this.codificado=this.codificado +'- '}
     if(this.values.charAt(i)=='U'){this.codificado=this.codificado +'··- '}
     if(this.values.charAt(i)=='V'){this.codificado=this.codificado +'···- '}
     if(this.values.charAt(i)=='W'){this.codificado=this.codificado +'·-- '}
     if(this.values.charAt(i)=='X'){this.codificado=this.codificado +'-··- '}
     if(this.values.charAt(i)=='Y'){this.codificado=this.codificado +'-·-- '}
     if(this.values.charAt(i)=='Z'){this.codificado=this.codificado +'--·· '}
     if(this.values.charAt(i)=='1'){this.codificado=this.codificado +'·---- '}
     if(this.values.charAt(i)=='2'){this.codificado=this.codificado +'··--- '}
     if(this.values.charAt(i)=='3'){this.codificado=this.codificado +'···-- '}
     if(this.values.charAt(i)=='4'){this.codificado=this.codificado +'···- '}
     if(this.values.charAt(i)=='5'){this.codificado=this.codificado +'····· '}
     if(this.values.charAt(i)=='6'){this.codificado=this.codificado +'-···· '}
     if(this.values.charAt(i)=='7'){this.codificado=this.codificado +'--··· '}
     if(this.values.charAt(i)=='8'){this.codificado=this.codificado +'---·· '}
     if(this.values.charAt(i)=='9'){this.codificado=this.codificado +'----· '}
     if(this.values.charAt(i)=='0'){this.codificado=this.codificado +'----- '}
   
   }
   if(this.values.charAt(i-1)=='A'){audio_A.play();}
   if(this.values.charAt(i-1)=='B'){audio_B.play();}
   if(this.values.charAt(i-1)=='C'){audio_C.play();}
   if(this.values.charAt(i-1)=='D'){audio_D.play();}
   if(this.values.charAt(i-1)=='E'){audio_E.play();}
   if(this.values.charAt(i-1)=='F'){audio_F.play();}
   if(this.values.charAt(i-1)=='G'){audio_G.play();}
   if(this.values.charAt(i-1)=='H'){audio_H.play();}
   if(this.values.charAt(i-1)=='I'){audio_I.play();}
   if(this.values.charAt(i-1)=='J'){audio_J.play();}
   if(this.values.charAt(i-1)=='K'){audio_K.play();}
   if(this.values.charAt(i-1)=='L'){audio_L.play();}
   if(this.values.charAt(i-1)=='M'){audio_M.play();}
   if(this.values.charAt(i-1)=='N'){audio_N.play();}
   if(this.values.charAt(i-1)=='O'){audio_O.play();}
   if(this.values.charAt(i-1)=='P'){audio_P.play();}
   if(this.values.charAt(i-1)=='Q'){audio_Q.play();}
   if(this.values.charAt(i-1)=='R'){audio_R.play();}
   if(this.values.charAt(i-1)=='S'){audio_S.play();}
   if(this.values.charAt(i-1)=='T'){audio_T.play();}
   if(this.values.charAt(i-1)=='U'){audio_U.play();}
   if(this.values.charAt(i-1)=='V'){audio_V.play();}
   if(this.values.charAt(i-1)=='W'){audio_W.play();}
   if(this.values.charAt(i-1)=='X'){audio_X.play();}
   if(this.values.charAt(i-1)=='Y'){audio_Y.play();}
   if(this.values.charAt(i-1)=='Z'){audio_Z.play();}
   if(this.values.charAt(i-1)=='1'){audio_1.play();}
   if(this.values.charAt(i-1)=='2'){audio_2.play();}
   if(this.values.charAt(i-1)=='3'){audio_3.play();}
   if(this.values.charAt(i-1)=='4'){audio_4.play();}
   if(this.values.charAt(i-1)=='5'){audio_5.play();}
   if(this.values.charAt(i-1)=='6'){audio_6.play();}
   if(this.values.charAt(i-1)=='7'){audio_7.play();}
   if(this.values.charAt(i-1)=='8'){audio_8.play();}
   if(this.values.charAt(i-1)=='9'){audio_9.play();}
   if(this.values.charAt(i-1)=='0'){audio_0.play();}
  }
   constructor() { }
     

  ngOnInit() {
  }

  SOS(){
    
  }
}
