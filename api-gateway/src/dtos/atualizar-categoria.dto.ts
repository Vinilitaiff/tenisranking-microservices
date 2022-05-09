import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class AtualizarCategoriaDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Evento>;
}

interface Evento {
  nome: string;
  operacao: string;
  valor: number;
}
