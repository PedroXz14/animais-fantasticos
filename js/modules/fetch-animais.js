import animarNumeros from "./animar-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numeros = document.querySelector(".numeros-grid");

    function createAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add("numero-animal");
      div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
      return div;
    }

    animaisJSON.forEach((animal) => {
      const animalDiv = createAnimal(animal);
      numeros.appendChild(animalDiv);
    });

    animarNumeros();
  }

  fetchAnimais("./animais-api.json");
}
