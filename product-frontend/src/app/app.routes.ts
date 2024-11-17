import { Routes } from '@angular/router';
import { VerProductosComponent } from './productos/ver-productos/ver-productos.component';
import { AgregarProductosComponent } from './productos/agregar-productos/agregar-productos.component';

export const routes: Routes = [
    { path: '', component: VerProductosComponent }, 
    { path: 'app-agregar-productos', component: AgregarProductosComponent },
];
