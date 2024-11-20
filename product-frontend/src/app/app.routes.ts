import { Routes } from '@angular/router';
import { VerProductosComponent } from './productos/ver-productos/ver-productos.component';
import { AgregarProductosComponent } from './productos/agregar-productos/agregar-productos.component';
import { AuthComponent } from './auth/auth/auth.component';
import { RegisterComponent } from './register/register/register.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
    {path: 'login', component: AuthComponent},
    {path: 'verProductos', component: VerProductosComponent},
    {path: 'registrarse', component: RegisterComponent},
    {path: 'app-agregar-productos', component: AgregarProductosComponent },
    {path: 'ver-ordenes', component: OrdersComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login'} 
];
