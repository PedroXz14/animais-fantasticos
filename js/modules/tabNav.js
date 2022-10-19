export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    this.tabContent[index].classList.add(
      "ativo",
      this.tabContent[index].dataset.animar
    );
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    this.addTabNavEvent();
    return this;
  }
}
