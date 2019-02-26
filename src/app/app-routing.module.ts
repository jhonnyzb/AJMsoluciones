import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPrincipalComponent } from './LayoutsUsuario/layout-principal/layout-principal.component';
import { PagInicioComponent } from './PaginasUsuario/pag-inicio/pag-inicio.component';

const routes: Routes = [
  {
    path: '', component: LayoutPrincipalComponent,
      children: [
        { path: '', component: PagInicioComponent, pathMatch: 'full' }
        //{ path: 'servicios', component: ServiciosComponent  }
        //{ path: 'noticia-single', component: NoticiaSingleComponent }
      ]
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
