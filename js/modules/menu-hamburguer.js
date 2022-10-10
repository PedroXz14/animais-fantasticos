import outsideEvent from "./outside-event.js";

export default function menuHamburguer() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');

  function openMenu() {
    menuButton.classList.add("active");
    menuLista.classList.add("active");
    outsideEvent(menuLista, ["click", "touchstart"], () => {
      menuButton.classList.remove("active");
      menuLista.classList.remove("active");
    });
  }

  ["click", "touchstart"].forEach((userEvent) => {
    menuButton.addEventListener(userEvent, openMenu);
  });
}
