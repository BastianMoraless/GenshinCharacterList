import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Personaje {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    titulo: string

    @Column()
    informacionGeneral: string

    @Column()
    rareza: number

    @Column()
    elemento: string

    @Column()
    constelacion: string

    @Column({type:'varchar', length: 5})
    cumpleanos: string

    @Column({ nullable: true })  // Campo para almacenar la URL de la imagen
    imagenUrl: string;
}
