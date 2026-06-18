import { Component, inject, OnInit, signal } from '@angular/core';
import { ModaService } from '../../../core/services/moda';
import { ModaModel } from '../../../core/models/moda';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

private readonly modaService = inject(ModaService);

moda =signal<ModaModel[]>([]);
isloading = signal(true);

  ngOnInit(): void {
    this.loadModa();
  }

  private loadModa(): void {
    this.modaService.getAll().subscribe({
      next: (data) => {
        this.moda.set(data);
        this.isloading.set(false);
      },
      error: (error) => {
        console.error('Error al cargar la moda:', error);
        this.isloading.set(false);
      }
    });

}

}