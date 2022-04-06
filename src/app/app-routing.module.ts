import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

//aqui declaramos todas las rutas que van a ser direccionadas
const routes: Routes = [
  //esta ruta contiene el htm general (pages.component.html)
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      //el path vacio me redirecciones al dashboard
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },


    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //cualquier otro path no este een los declarados redirecciona a la pagian no encontrada creada como componente 
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  //espificamos las rutas principales declaradas
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
