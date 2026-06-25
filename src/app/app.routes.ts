import { Routes } from '@angular/router';
import { Vitrine } from './paginas/vitrine/vitrine';
import { Login } from './paginas/outh/login/login';
import { Cadastro } from './paginas/outh/cadastro/cadastro';
import { Inicio } from './paginas/inicio/inicio';
import { Component } from '@angular/core';
import { Dashboard } from './paginas/admin/dashboard/dashboard';
import { ColecaoForm } from './paginas/admin/colecao-form/colecao-form';
import { guardGuard } from './core/guards/guard-guard';
import { Sobre } from './paginas/sobre/sobre';

export const routes: Routes = [
    {path: "vitrine", component: Vitrine}, 
    {path: '', component: Inicio, pathMatch: 'full'},
    {path: "login", component: Login},
    {path: "cadastro", component: Cadastro},
    {path: "sobre", component: Sobre},
   { path: 'admin',
    canActivate: [guardGuard],
    children: [
        {path:'', redirectTo: 'dashboard', pathMatch: 'full' },
        {path: 'dashboard', component: Dashboard},
        {path: 'create', component: ColecaoForm},
        {path: 'edit/:id', component: ColecaoForm},]}
];
