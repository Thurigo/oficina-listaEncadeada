export class No {
  constructor(itens, prioridade) {
      this.itens = itens;
      this.prioridade = prioridade;
      this.proximo = null;
  }
}

export class OficinaEnade {
  constructor() {
      this.top = null;
  }

  printar() {
      let momento = this.top;
      while (momento) {
          console.log(`itens: ${momento.itens}, Prioridade: ${momento.prioridade}`);
          momento = momento.proximo;
      }
  }

  inserir(itens, prioridade) {
      const novoNo = new No(itens, prioridade);
      
      if (!this.top) {
          this.top = novoNo;
          return;
      }

      if (prioridade === 'amarelo') {
          if (this.top.prioridade !== 'amarelo') {
              novoNo.proximo = this.top;
              this.top = novoNo;
              return;
          }
          let momento = this.top;
          while (momento.proximo && momento.proximo.prioridade === 'amarelo') {
              momento = momento.proximo;
          }
          novoNo.proximo = momento.proximo;
          momento.proximo = novoNo;
      } else {
          let momento = this.top;
          while (momento.proximo) {
              momento = momento.proximo;
          }
          momento.proximo = novoNo;
      }
  }
}

const lista = new OficinaEnade();
lista.inserir('itens 0', 'amarelo');
lista.inserir('itens 1', 'verde');
lista.inserir('itens 2', 'amarelo');
lista.printar();
