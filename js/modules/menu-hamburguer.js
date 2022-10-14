import outsideEvent from "./outside-event.js";

export default class MenuHamburguer {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.events = ["click", "touchstart"];

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add("active");
    this.menuList.classList.add("active");
    outsideEvent(this.menuList, this.events, () => {
      this.menuButton.classList.remove("active");
      this.menuList.classList.remove("active");
    });
  }

  addMenuHamburguerEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    this.addMenuHamburguerEvents();
    return this;
  }
}
