import { RouterModule, Routes } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

import { from } from 'rxjs';
import { ramasComponent } from './ramas/ramas.component';

import { ManadaComponent } from './manada/manada.component';
import { UnidadComponent } from './unidad/unidad.component';
import { CaminantesComponent } from './caminantes/caminantes.component';
import { RobertComponent } from './robert/robert.component';
import { DocRobertComponent } from './doc-robert/doc-robert.component';

import { MurcielagoComponent } from './clave/murcielago/murcielago.component';
import { MurcieladoComponent } from './impresion/murcielado/murcielado.component';
import { HipotenusaComponent } from './clave/hipotenusa/hipotenusa.component';
import { ParelinofuComponent } from './clave/parelinofu/parelinofu.component';
import { MorseComponent } from './clave/morse/morse.component';
import { DocCaminantesComponent } from './doc-caminantes/doc-caminantes.component';
import { DocManadaComponent } from './doc-manada/doc-manada.component';
import { DocUnidadComponent } from './doc-unidad/doc-unidad.component';
import { ContactoComponent } from './contacto/contacto.component';

import { HttpClientModule } from '@angular/common/http';    // Para servicio de Contacto
import { FormsModule } from '@angular/forms';               //
import { MessageService } from './message.service';        //



const routes: Routes = [
  { path: 'inicio', component:InicioComponent },
  { path: 'nosotros', component:NosotrosComponent},
  { path: 'contacto', component:ContactoComponent},
 
  { path: 'ramas', component:ramasComponent},
  { path:'manada',component:ManadaComponent},
  { path:'unidad',component:UnidadComponent},
  { path:'caminantes',component:CaminantesComponent},
  { path:'robert',component:RobertComponent},

  { path:'Manada',component:DocManadaComponent},
  { path:'Unidad',component:DocUnidadComponent},
  { path:'Caminantes',component:DocCaminantesComponent},
  { path:'Rovers',component:DocRobertComponent},

  { path:'murcielago',component:MurcielagoComponent},
  { path:'hipotenusa',component:HipotenusaComponent},
  { path:'parelinofu',component:ParelinofuComponent},
  { path:'morse',component:MorseComponent},
  

  { path: '', component:InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    InicioComponent,
    NosotrosComponent,
    
    
    ramasComponent,
    ManadaComponent,
    UnidadComponent,
    CaminantesComponent,
    RobertComponent,
    DocRobertComponent,
   
    MurcielagoComponent,
    HipotenusaComponent,
    ParelinofuComponent,
    MorseComponent,
    DocCaminantesComponent,
    DocManadaComponent,
    DocUnidadComponent,
    ContactoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
