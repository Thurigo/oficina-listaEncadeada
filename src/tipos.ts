export interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  valor: number;
}

export interface CategoriaVeiculo {
  novos: Veiculo[];
  usados: Veiculo[];
}

export interface DadosVeiculos {
  carros: CategoriaVeiculo[];
  motos: CategoriaVeiculo[];
}
