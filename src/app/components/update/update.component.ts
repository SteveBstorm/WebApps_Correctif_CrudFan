import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  fg! : FormGroup
  id! : number
  currentFan! : Fan

  constructor(
    private _builder : FormBuilder,
    private _fanService : FanService,
    private _router : Router,
    private _ar : ActivatedRoute
    ){}

  ngOnInit() {
    this.id = this._ar.snapshot.params['id']
    this.currentFan = this._fanService.getByIndex(this.id)
    this.fg = this._builder.group({
      name : [this.currentFan.name, Validators.required],
      birthdate : [this.currentFan.birthdate, this.AgeValidator()],
      series : this._builder.array([])
    })

    this.currentFan.series?.forEach(element => {
      this.getSeriesArray().push(new FormControl(element, Validators.required))
    });
  }

  getSeriesArray() : FormArray {
    return this.fg.get('series') as FormArray
  }

  addSerie() {
    this.getSeriesArray().push(new FormControl(null, Validators.required))
  }

  removeSerie(index : number){
    this.getSeriesArray().removeAt(index)
  }

  AgeValidator() : ValidatorFn {
    return (control : AbstractControl) => {
      let value = control.value
      let date : Date = new Date(value)

      if((new Date()).getFullYear() - date.getFullYear() < 13)
        return {dateError : 'Tu es trop jeune'}
      return null
    }
  }

  onSubmit() {
    this._fanService.update(this.fg.value, this.id)
    this._router.navigate(['liste'])
  }
}
