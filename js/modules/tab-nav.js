export default function tabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabConteudo = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabConteudo.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabConteudo[index].classList.add(
      "ativo",
      tabConteudo[index].dataset.animar
    );
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
