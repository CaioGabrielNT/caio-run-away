import { Component, inject, input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ModaService } from '../../../core/services/moda';

@Component({
  selector: 'app-colecao-form',
  templateUrl: './colecao-form.html',
  styleUrls: ['./colecao-form.css'],
  imports: [ReactiveFormsModule],
})
export class ColecaoForm {
  private modaService = inject(ModaService);
  selectedFile: File | null = null;

  colecaoForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    categoria: new FormControl(''),
    preco: new FormControl(''),
    tag: new FormControl(''),
    descricao: new FormControl(''),
  });

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null
  }


  onSubmit(): void {
    const formData = new FormData();
    const values = this.colecaoForm.value;

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value));
    })

    if (this.selectedFile) {
      formData.append("imagem", this.selectedFile);
    }

    this.modaService.create(formData).subscribe({
      next: () => {
        alert("Criado com sucesso!");
      },
      error: () => {
        alert("🤦‍♂️ Erro ao criar a coleção!");
      }
    });
  }
}