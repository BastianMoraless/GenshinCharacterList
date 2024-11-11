import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../interfaces/personaje';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pj-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pj-list.component.html',
  styleUrl: './pj-list.component.css'
})
export class PjListComponent implements OnInit{

  personajes:Personaje[] = []

  constructor(private personajeServices:PersonajeService){}

  ngOnInit(): void {
    this.findAllPj()
  }


  findAllPj(){
    this.personajeServices.findAll()
      .subscribe({
        next: res => {
          this.personajes = res
        }
      })
  }
}
