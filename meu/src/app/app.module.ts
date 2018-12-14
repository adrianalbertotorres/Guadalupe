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
import { ContactoComponent } from './contacto/contacto.component';
import  {Drop1Component} from './drop1/drop1.component';

import { from } from 'rxjs';
import { ramasComponent } from './ramas/ramas.component';

import { ManadaComponent } from './manada/manada.component';
import { UnidadComponent } from './unidad/unidad.component';
import { CaminantesComponent } from './caminantes/caminantes.component';
import { RobertComponent } from './robert/robert.component';
import { DocRobertComponent } from './doc-robert/doc-robert.component';


const routes: Routes = [
  { path: 'inicio', component:InicioComponent },
  { path: 'nosotros', component:NosotrosComponent},
  { path: 'contacto', component:ContactoComponent},
  
  { path: 'ramas', component:ramasComponent},
  { path:'manada',component:ManadaComponent},
  { path:'unidad',component:UnidadComponent},
  { path:'caminantes',component:CaminantesComponent},
  { path:'robert',component:RobertComponent},
  { path:'Rovers',component:DocRobertComponent},
  
  
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
    ContactoComponent,
    Drop1Component,
    
    ramasComponent,
    ManadaComponent,
    UnidadComponent,
    CaminantesComponent,
    RobertComponent,
    DocRobertComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
