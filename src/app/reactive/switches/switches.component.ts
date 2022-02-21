import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  })

  persona = {
    genero: 'F',
    notificaciones: true,
    condiciones: false,
  }

  ngOnInit(): void {
      this.miFormulario.setValue(this.persona)
  }

}
