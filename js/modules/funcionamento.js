export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }

  dadosFunciomento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);

    this.horarioSemana = document
      .querySelector("[data-horario]")
      .dataset.horario.split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horarioAtual = this.dataAtual.getUTCHours() - 3;
  }

  isOpen() {
    this.abertoNaSemana = this.diasSemana.indexOf(this.diaAtual) !== -1;
    this.abertoNoHorario =
      this.horarioAtual >= this.horarioSemana[0] &&
      this.horarioAtual < this.horarioSemana[1];
    return this.abertoNaSemana && this.abertoNoHorario;
  }

  adicionarClasse() {
    if (this.isOpen()) {
      this.funcionamento.classList.add("aberto");
    } else {
      this.funcionamento.classList.add("fechado");
    }
  }

  init() {
    this.dadosFunciomento();
    this.dadosAgora();
    this.adicionarClasse();
    return this;
  }
}
