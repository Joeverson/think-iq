import config from './config.json'

const COUNT_CYCLE_FOR_END_OPERATION = 12;
const POSITIVE_RESULT = 'ganhei'
const NEGATIVE_RESULT = 'perdi'

export class Solos {
  constructor(investment) {
    const investmentInit = (investment * config.investment)
    this.currency = {
      _investmentInit: (investment - investmentInit),
      _cycle: 0,
      _countLose: 3,
      _reserva: 0.2,
      _percentRecerva: config.investment,
      _percentLucro: 0,
      _investmentByCicle: investmentInit
    }
  }

  nextCycle(status) {
    switch (status) {
      case POSITIVE_RESULT:
        this.positiveCycle();
        break;
      case NEGATIVE_RESULT:
        this.negativeCycle();
        break;
      default:
        this.toString(`Não entendi: ${status}`);
    }
    // caso seja positivo deve incrementar o valor removendo a _reserva
    // caso seja ruim não incrementa, mas diminue o _countLose
  }

  /**
    Caso tenha sido uma boa negociação
    então ele incrementa e remove o valor
    de _reserva
  */
  positiveCycle() {
    if (this.currency._cycle < COUNT_CYCLE_FOR_END_OPERATION) {
      const lucro = this.currency._investmentByCicle * this.currency._percentLucro

      // removendo a _reserva do lucro
      this.currency._reserva += lucro * this.currency._percentRecerva

      // novo valor a ser investido
      this.currency._investmentByCicle += lucro

      // removendo do investimento inicial o valor para poder negociar
      this.currency._investmentInit -= this.currency._investmentByCicle
    } else {
      this.toString(`
          -------------------------------
          Parabéns você terminou o ciclos
          -------------------------------

          ${this.report()}
        `)
    }
  }

  /**
    Quando for uma pessima negociaçaõ deve
    constinuar com o valor inicial e
    fazer decrementar o _countLose para eu saber
    quando esta ficando perigoso cotinuar
  */

  negativeCycle() {
    if (this.currency._countLose < 1) {
      this.toString(`
          -------------------------------
          Não faça mais, esta perigoso já
          -------------------------------

          ${this.report()}
        `)
    } else {
      this.currency._countLose -= 1

      this.toString(`
          -------------------------------
          Ops :/ você perdeu uma
          -------------------------------

          Tentativas restantes: ${this.currency._countLose}

          ${this.report()}
        `)
    }
  }

  /**
    Apresentando as mensagens para o usuario
  */
  toString(msg) {
    console.log(msg);
  }

  /**
    Relatorio geral do acontecido
  */
  report() {
    return `
      Reserva: ${this.currency._reserva}
      Investimento Inicial: ${this.currency._investmentInit}
      Investimento do ultimo ciclo: ${this.currency._investmentByCicle}

      Total: ${this.currency._reserva + this.currency._investmentInit + this.currency._investmentByCicle}
    `
  }
}
