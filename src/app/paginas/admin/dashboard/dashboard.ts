import { Component, inject, OnInit, signal } from '@angular/core';
import { ModaService } from '../../../core/services/moda';
import { ModaModel } from '../../../core/models/moda';
import { NgClass } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
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

deleteModa(id: string): void {
  if(!confirm("Tem certeza que deseja excluir esta coleção?")) {
    return; 
  }
  this.modaService.delete(id).subscribe({
    next: () => {
      alert("Coleção excluída com sucesso!");
      this.loadModa();
    },
    error: (err) => {
      alert(err.error?.error || "🤦‍♂️ Erro ao excluir a coleção!");
    }
  })
}

gerarAleatorio(): number {
  return Math.floor(Math.random() * 10000);
}
}