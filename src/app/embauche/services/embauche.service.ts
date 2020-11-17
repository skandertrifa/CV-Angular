import { Injectable } from '@angular/core';
import { Personne } from './../../shared/models/personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes = [];
  constructor() { }

  addToEmbauche(personne: Personne): string {
    if ( !this.personnes.includes(personne) )
    {
    this.personnes.push(personne);
    return 'success';
    }
    else{
      return 'error';
    }

  }

  getEmbauches(): Personne[]{
    return this.personnes;
  }
}
