import { Component } from '@angular/core';

import { ANIMALES } from '../../data/data.animales';
import { Animal } from "../../interfaces/animal.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animales: Animal[] = [];
  audio = new Audio();
  audioTiempo: any;

  constructor() {
    this.animales = ANIMALES.splice(0);
  }
  reproducir(animal: Animal) {

    console.log(animal);
    //this.pausar_audio(animal);
    if (animal.reproduciendo) {
      this.reproduciendo = false;
      return;
    }

    this.audio.src = animal.audio;
    this.audio.load();
    this.audio.play();

    animal.reproduciendo = true;

    this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);
  }
  private pausar_audio(animalSel: Animal) {

    clearTimeout(this.audioTiempo);
    this.audio.pause();
    this.audio.currenTime = 0;
    console.log(animales);
    console.log(animalSel);

    for (let animal of this.animales) {

      if (animal.nombre != animalSel.nombre) {


        this.animal.reproduciendo = false;
      }
    }
  }
private borrar_animal(idx:number){
  this.animales.splice(idx,1);
}

}
