import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./core/components/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "admin",
    canActivateChild: [authGuard],
    loadChildren: () => import("./components/admin/admin.module").then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
