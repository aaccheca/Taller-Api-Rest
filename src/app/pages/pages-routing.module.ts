import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  //Rutas Protegidas
  {
    path: '',
    component: PagesComponent,
    children: [
      //subir las rutas anterior en children
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'catalogue', component: CatalogueComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PagesRoutingModule {}
