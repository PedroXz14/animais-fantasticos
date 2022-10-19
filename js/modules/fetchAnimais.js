import AnimarNumeros from "./animarNumeros.js";

export default function fetchAnimais(url, target) {
  const numeros = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const animalDiv = createAnimal(animal);
    numeros.appendChild(animalDiv);
  }

  async function criarAnimais() {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();

    animaisJSON.forEach((animal) => preencherAnimais(animal));

    const animarNumeros = new AnimarNumeros(
      "[data-numero]",
      ".numeros",
      "ativo"
    );
    animarNumeros.init();
  }

  return criarAnimais();
}
