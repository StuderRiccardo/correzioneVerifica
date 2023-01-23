import { Component, Input } from '@angular/core';
import { Annunci } from '../models/annunci.models';

@Component({
  selector: 'app-annuci',
  templateUrl: './annuci.component.html',
  styleUrls: ['./annuci.component.css']
})
export class AnnuciComponent {
  @Input() ann!: Annunci;
}
