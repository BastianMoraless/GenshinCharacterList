export interface Personaje {
    id?: number
    nombre: string
    titulo: string
    informacionGeneral: string
    rareza: number
    elemento: string
    constelacion: string
    cumpleanos: string
    imagenUrl: File | ""
}
