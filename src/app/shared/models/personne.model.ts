export class Personne {
  id: number;
  name: string;
  age: number;
  job: string;
  imagePath = '';

  constructor( id: number, name = '', age: number, job= '', imagePath = ''){
    this.id = id;
    this.name = name;
    this.age = age;
    this.job = job;
    this.imagePath = imagePath;
  }
}
