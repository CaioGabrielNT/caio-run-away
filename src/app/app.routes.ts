import { Routes } from '@angular/router';
import { Vitrine } from './paginas/vitrine/vitrine';
import { Login } from './paginas/outh/login/login';
import { Cadastro } from './paginas/outh/cadastro/cadastro';
import { Inicio } from './paginas/inicio/inicio';

export const routes: Routes = [
    {path: "vitrine", component: Vitrine}, 
    {path: '', component: Inicio, pathMatch: 'full'},
    {path: "login", component: Login},
    {path: "cadastro", component: Cadastro}
];
