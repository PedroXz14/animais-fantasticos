export default function funcionamento() {
  // eslint-disable-next-line no-shadow
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);

  const horarioSemana = document
    .querySelector("[data-horario]")
    .dataset.horario.split(",")
    .map(Number);

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horarioAtual = dataAtual.getHours();

  const abertoNaSemana = diasSemana.indexOf(diaAtual) !== -1;
  const abertoNoHorario =
    horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1];

  if (abertoNaSemana && abertoNoHorario) {
    funcionamento.classList.add("aberto");
  } else {
    funcionamento.classList.add("fechado");
  }
}
