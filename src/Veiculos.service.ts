import { DadosVeiculos, Veiculo } from './tipos';

export function filtrarVeiculosPorMarca(dados: DadosVeiculos, marca: string): Veiculo[] {
  const veiculos: Veiculo[] = [];
  for (const categoria of [...dados.carros, ...dados.motos]) {
    if (categoria.novos) {
      veiculos.push(...categoria.novos.filter(v => v.marca === marca));
    }
    if (categoria.usados) {
      veiculos.push(...categoria.usados.filter(v => v.marca === marca));
    }
  }
  return veiculos;
}

export function somarValoresVeiculosPorMarca(dados: DadosVeiculos, marca: string): number {
  let valorTotal = 0;
  for (const categoria of [...dados.carros, ...dados.motos]) {
    if (categoria.novos) {
      valorTotal += categoria.novos.filter(v => v.marca === marca).reduce((soma, v) => soma + v.valor, 0);
    }
    if (categoria.usados) {
      valorTotal += categoria.usados.filter(v => v.marca === marca).reduce((soma, v) => soma + v.valor, 0);
    }
  }
  return valorTotal;
}

export function filtrarVeiculosMaisNovosQue(dados: DadosVeiculos, ano: number): Veiculo[] {
  const veiculos: Veiculo[] = [];
  for (const categoria of [...dados.carros, ...dados.motos]) {
    if (categoria.novos) {
      veiculos.push(...categoria.novos.filter(v => v.ano > ano));
    }
    if (categoria.usados) {
      veiculos.push(...categoria.usados.filter(v => v.ano > ano));
    }
  }
  return veiculos;
}
