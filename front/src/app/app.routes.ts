import { Routes } from '@angular/router';
import { PjListComponent } from './components/pj-list/pj-list.component';
import { PjFormComponent } from './components/pj-form/pj-form.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

export const routes: Routes = [
    {
        path: '',
        component: PjListComponent
    },
    {
        path: 'list',
        component: PjListComponent
    },
    {
        path: 'form',
        component: PjFormComponent
    },
    {
        path: 'form/:id',
        component: PjFormComponent
    },
    {
        path: 'personaje/:id',
        component: PersonajeComponent
    }
];
