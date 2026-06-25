import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Importamos o RouterLink do Angular

@Component({
  selector: 'app-sobre',
  standalone: true,                       // 2. Garantimos que o componente é standalone
  imports: [RouterLink],                  // 3. Adicionamos o RouterLink aqui dentro
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {}