import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit{

  personaje:Personaje = {
    nombre: "",
    titulo: "",
    informacionGeneral: "",
    rareza: 0,
    elemento: "",
    constelacion: "",
    cumpleanos: "",
    imagenUrl: '',
  }

  constructor(
    private personajeServices: PersonajeService,
    private activeRoute: ActivatedRoute
  ){}


  ngOnInit(): void {
    const param = this.activeRoute.snapshot.params
    this.findOnePj(param["id"])
  }

  findOnePj(id:string){
    this.personajeServices.findOne(id)
      .subscribe({
        next: res => {
          this.personaje = res
        },
        error: err => console.log(err)
      })
  }
}
