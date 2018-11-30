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
import { RamasComponent } from './ramas/ramas.component';
import { from } from 'rxjs';
import { Drop2Component } from './drop2/drop2.component';


const routes: Routes = [
  { path: 'inicio', component:InicioComponent },
  { path: 'nosotros', component:NosotrosComponent},
  { path: 'contacto', component:ContactoComponent},
  { path: 'drop1', component:Drop1Component},
  { path: 'drop2', component:Drop2Component},
  { path: 'ramas', component:RamasComponent},  
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
    RamasComponent,
    Drop2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
