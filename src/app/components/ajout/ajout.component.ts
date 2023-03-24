import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent {

  fg! : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _fanService : FanService,
    private _router : Router
    ){}

  ngOnInit() {
    this.fg = this._builder.group({
      name : [null, Validators.required],
      birthdate : [null, this.AgeValidator()],
      series : this._builder.array([])
    })
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
    this._fanService.addFan(this.fg.value)
    this._router.navigate(['liste'])
  }
}
