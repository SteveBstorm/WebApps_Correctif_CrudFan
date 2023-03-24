import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  currentFan! : Fan

  constructor(
    private _service : FanService,
    private _ar : ActivatedRoute
    ) {

  }

  ngOnInit(){
    this.currentFan = this._service.getByIndex(this._ar.snapshot.params['id'])
  }
}
