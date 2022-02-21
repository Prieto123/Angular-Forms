import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder) { }

  miFormulario : FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Minecraft']
    ], Validators.required)


  })



  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  losFavoritos = this.favoritosArr.controls;

  agregar: FormControl = this.fb.control('', Validators.required)


  valido( campo: string ) {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  agregarFav() {
    if (this.agregar.invalid) { return; }
    this.favoritosArr.push( this.fb.control( this.agregar.value, Validators.required ) )
    this.agregar = this.fb.control('', Validators.required)
  }

  borrar( i: number ) {
    this.favoritosArr.removeAt(i);
  }

  guardar() {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
      
    }
  }
}
