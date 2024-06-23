import { readFileSync } from 'fs';
import { DadosVeiculos } from './tipos';

export function carregarDadosVeiculos(caminhoArquivo: string): DadosVeiculos {
  const dados = readFileSync(caminhoArquivo, 'utf-8');
  return JSON.parse(dados) as DadosVeiculos;
}
