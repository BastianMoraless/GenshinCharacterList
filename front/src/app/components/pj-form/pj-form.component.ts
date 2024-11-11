import { Component, OnInit, signal } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pj-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pj-form.component.html',
  styleUrl: './pj-form.component.css'
})
export class PjFormComponent implements OnInit{

  form = signal<FormGroup>(
    new FormGroup({
      nombre: new FormControl(""),
      titulo: new FormControl(""),
      informacionGeneral: new FormControl(""),
      rareza: new FormControl(0),
      elemento: new FormControl(""),
      constelacion: new FormControl(""),
      cumpleanos: new FormControl(""),
      imagenUrl: new FormControl(null)
    })
  )

  constructor(
    private personajeService: PersonajeService,
    private router: Router
  ){}


  ngOnInit(): void {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.form().patchValue({ imagenUrl: file });
  }

  createPersonaje(){
    const formData = new FormData();
    Object.entries(this.form().value).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    this.personajeService.create(formData)
      .subscribe({
        next: res => this.router.navigate(['/list']),
        error: err => console.log(err)
      });
  }
}
