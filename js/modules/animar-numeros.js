export default function animarNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animacaoNumeros() {
    numeros.forEach((numero) => {
      const total = Number(numero.innerText);
      const incremento = Math.floor(total / 100);

      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animacaoNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numeros");

  observer.observe(observerTarget, { attributes: true });
}
