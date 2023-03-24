import { Component } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  listeFan! : Fan[]
  constructor(private _fan : FanService) {

  }

  ngOnInit() {
    this.listeFan = this._fan.getAll()
  }

  remove(index : number) {
    this._fan.delete(index)
  }
}
