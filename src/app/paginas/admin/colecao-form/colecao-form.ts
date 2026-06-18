import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-colecao-form',
  imports: [],
  templateUrl: './colecao-form.html',
  styleUrls: ['./colecao-form.css'],
})
export class ColecaoForm {

  colecaoForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    categoria: new FormControl(''),
    preco: new FormControl(''),
    tag: new FormControl(''),
    imagem_url: new FormControl(''),
  });

}
