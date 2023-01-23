import { Component } from '@angular/core';
import { Annunci } from './models/annunci.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'annunci-cognome';
  annunci_vet : Annunci[] = []
  invia(nome :HTMLInputElement,tele :HTMLInputElement,mess :HTMLInputElement ){
    this.annunci_vet.push(new Annunci(nome.value,tele.value,mess.value))
    console.log(this.annunci_vet)
  }
}
