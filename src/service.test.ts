import { carregarDadosVeiculos } from '../src/carregacarro';
import { filtrarVeiculosPorMarca, somarValoresVeiculosPorMarca, filtrarVeiculosMaisNovosQue } from './Veiculos.service';

const dados = carregarDadosVeiculos('./veiculos.json');

test('filtrar veículos por marca', () => {
  const resultado = filtrarVeiculosPorMarca(dados, 'Chevrolet');
  expect(resultado.length).toBeGreaterThan(0);
  expect(resultado.every(v => v.marca === 'Chevrolet')).toBe(true);
});

test('somar valores dos veículos por marca', () => {
  const valorTotal = somarValoresVeiculosPorMarca(dados, 'VolksWagen');
  expect(valorTotal).toBeGreaterThan(0);
});

test('filtrar veículos mais novos que o ano', () => {
  const resultado = filtrarVeiculosMaisNovosQue(dados, 2020);
  expect(resultado.length).toBeGreaterThan(0);
  expect(resultado.every(v => v.ano > 2020)).toBe(true);
});
