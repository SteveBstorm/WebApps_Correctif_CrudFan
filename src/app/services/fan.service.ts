import { Injectable } from '@angular/core';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  listeFan : Fan[] = []

  constructor() { }

  addFan(newFan : Fan) {
    this.listeFan.push(newFan)
  }

  getAll() : Fan[] {
    return this.listeFan
  }

  getByIndex(index : number) : Fan {
    return this.listeFan[index]
  }

  delete(index : number) : void{
    this.listeFan.splice(index, 1)
  }

  update(fan : Fan, index : number) {
    this.listeFan[index] = fan
  }
}
