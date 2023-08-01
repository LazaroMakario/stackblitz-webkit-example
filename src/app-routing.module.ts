import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importa los componentes que se mostrarán en las rutas
import { SuccessComponent } from './success/success.component';
//import { CancelComponent } from './cancel.component';
//import { ErrorComponent } from './error.component';

const routes: Routes = [
  { path: 'success', component: SuccessComponent },
  //{ path: 'cancel', component: CancelComponent },
  //{ path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
