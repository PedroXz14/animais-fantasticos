import outsideEvent from "./outside-event.js";

export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    this.events = ["touchstart", "click"];

    // this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add("active");
    outsideEvent(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    this.addDropdownMenusEvent();
    return this;
  }
}
