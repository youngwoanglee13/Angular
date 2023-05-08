import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';

const routes: Routes = [
  { path : 'contacto', component: ContactoComponent },
  { path : 'acerca', component: AcercaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
