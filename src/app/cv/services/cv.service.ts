import { Injectable } from '@angular/core';
import { Personne } from './../../shared/models/personne.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes = [
    new Personne(1, 'skander', 15, 'student', '../../assets/images/rotating_card_profile2.png'),
    new Personne(2, 'soltane', 20, 'student', '../../assets/images/rotating_card_profile.png'),
    new Personne(3, 'sami', 20, 'teacher', '../../assets/images/rotating_card_profile3.png')
  ]
  constructor() { }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
