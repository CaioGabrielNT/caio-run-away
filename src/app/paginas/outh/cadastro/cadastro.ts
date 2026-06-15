import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../core/services/outh';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  private authservice = inject(AuthService);
  private router = inject(Router);
  
  estaCarregando = signal(false)

  cadastroForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    name: new FormControl(""),
  });

  onSubmit() {
    this.estaCarregando.set(true)
    const { email, password, name } = this.cadastroForm.getRawValue()

    this.authservice.cadastro(name!,email!, password!).subscribe({
      next: () =>{
         alert("Cadastro realizado com sucesso!"),
         this.router.navigate(['/login'])

      },
      error: () => {
        this.estaCarregando.set(false)
        alert("Dados inválidos!")
      },
    });
  }
}
