import { IsNotEmpty, IsNumber, IsOptional, IsString, Length} from "class-validator"

export class CreatePersonajeDto {

    @IsString()
    @IsNotEmpty()
    nombre: string

    @IsString()
    @IsNotEmpty()
    titulo: string

    @IsString()
    @IsNotEmpty()
    informacionGeneral: string

    @IsNumber()
    @IsNotEmpty()
    rareza: number

    @IsString()
    @IsNotEmpty()
    elemento: string

    @IsString()
    @IsNotEmpty()
    constelacion: string

    @IsString()
    @IsNotEmpty()
    @Length(5, 5)
    cumpleanos: string

    @IsString()
    @IsOptional()
    imagenUrl?: string;
}
