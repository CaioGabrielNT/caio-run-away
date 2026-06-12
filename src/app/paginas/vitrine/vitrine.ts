import { Component, inject, OnInit, signal } from '@angular/core';
import { Moda } from "../../shared/moda/moda";
import { ModaModel } from '../../core/models/moda';
import { ModaService } from '../../core/services/moda';

@Component({
  selector: 'app-vitrine',
  imports: [Moda],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine implements OnInit {

  private readonly modaService = inject(ModaService)

  moda = signal<ModaModel[]>([]);

  ngOnInit(): void {
    this.modaService.getAll().subscribe((res) => {
      this.moda.set(res);
    });
  }
}
  
