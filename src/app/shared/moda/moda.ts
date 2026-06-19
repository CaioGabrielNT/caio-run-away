import { Component, input } from '@angular/core';
import { ModaModel } from '../../core/models/moda';

@Component({
  selector: 'app-moda',
  imports: [],
  templateUrl: './moda.html',
  styleUrl: './moda.css',
})
export class Moda {
  create(formData: FormData) {
    throw new Error('Method not implemented.');
  }

  data = input.required<ModaModel>()
}
