import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectex3]'
})
export class Directex3Directive {
  bgc = 'white';
  bc = 'red';
  @HostBinding('style.backgroundColor') bgColor = this.bgc;
  @HostBinding('style.borderColor') borderColor = this.bc;
  assignNewColor(): string {
    const randomNumber1 = Math.floor(Math.random() * Math.floor(256));
    const randomNumber2 = Math.floor(Math.random() * Math.floor(256));
    const randomNumber3 = Math.floor(Math.random() * Math.floor(256));
    const newColor = 'rgb(' + randomNumber1 + ',' + randomNumber2 + ',' + randomNumber3 + ')';
    return newColor;

  }

  @HostListener('keydown') onKeyDown(): void {
    this.bgColor = this.assignNewColor();
    this.borderColor = this.assignNewColor();
  }

  constructor() { }
  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * Math.floor(max));
  // }

}
