import { Component, input } from '@angular/core';
import { ModaModel } from '../../core/models/moda';

@Component({
  selector: 'app-moda',
  imports: [],
  templateUrl: './moda.html',
  styleUrl: './moda.css',
})
export class Moda {

  data = input.required<ModaModel>()
}
