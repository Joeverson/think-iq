import config from './config.json'

export class Lagatixa {
  constructor(investment) {
    this.investment = investment
    console.log(`Começando com o investimento de R$ ${investment}`);
  }

  getInvestment() {
    this.toString(this.investment)
  }

  goInvest() {
    const message = `Pode investir agora ${this.investment * config.investment}`
    return this.toString(message)
  }
  /**
    Validando e verificandos e os valores estão
    batendo os niveis de alerta e avisando para mim.
  */
  alerts() {
    if ((config.alert * this.investment) >= this.investment)
      this.toString(`Alerta, você esta começando a perder demais ${config.alert * this.investment}`)
    else ((config.danger * this.investment) >= this.investment)
      this.toString(`Perigoooo, ta perdendo demais => R$ -${config.alert * this.investment}`)
  }

  toString(msg) {
    console.log(msg)
  }
}


export class Solos {
  constructor() {
    this.currency = {
      _investmentInit: 0,
      _cicle: 12,
      _reserva: 0.2,
      _percentRecerva: config.investment,
      _countLose: 3,
      _investmentByCicle: 0
    }
  }

  nextCircle() {
    
  }
}
