import { Component, inject, input, OnInit, signal, Signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ModaService } from '../../../core/services/moda';
import { ActivatedRoute, Router } from '@angular/router';
import { ModaModel } from '../../../core/models/moda';

@Component({
  selector: 'app-colecao-form',
  templateUrl: './colecao-form.html',
  styleUrls: ['./colecao-form.css'],
  imports: [ReactiveFormsModule],
})
export class ColecaoForm implements OnInit {
  private modaService = inject(ModaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  selectedFile: File | null = null;
  id: any;
  isEditMode = signal(false);
  itemEdit: ModaModel[] = [];

  colecaoForm: FormGroup = new FormGroup({
    nome: new FormControl(),
    categoria: new FormControl(),
    preco: new FormControl(),
    tag: new FormControl(),
    descricao: new FormControl(),
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id) {
      this.modaService.getById(this.id).subscribe({
        next: (res) => {
          console.log(res);

          this.colecaoForm.patchValue({
            nome: res.nome,
            categoria: res.categoria,
            preco: res.preco,
            tag: res.tag,
            descricao: res.descricao,
          });
        },
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  onSubmit(): void {
    const formData = new FormData();
    const values = this.colecaoForm.value;

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    if (this.selectedFile) {
      formData.append('imagem', this.selectedFile);
    }
    if (this.id) {
      this.modaService.update(formData, this.id).subscribe({
        next: () => {
          alert('Atualizado com sucesso!');
          this.router.navigate(['/admin/dashboard']);
        },
        error: () => {
          alert('🤦‍♂️ Erro ao atualizar coleção!');
        },
      });
    } else {
      this.modaService.create(formData).subscribe({
        next: () => {
          alert('Criado com sucesso!');
          this.router.navigate(['/admin/dashboard']);
        },
        error: () => {
          alert('🤦‍♂️ Erro ao criar a coleção!');
        },
      });
    }
  }
}
