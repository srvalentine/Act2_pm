import { NgModule } from '@angular/core';
import { ExplabComponent } from "../app/explab/explab.component";
import { DatosComponent } from "../app/datos/datos.component";
import { CertComponent } from "../app/cert/cert.component"
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'explab', 
    component: ExplabComponent
  },
  { 
    path: 'cert', 
    component: CertComponent 
  },
  { 
    path: 'datos', 
    component: DatosComponent 
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
