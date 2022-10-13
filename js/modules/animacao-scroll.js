export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeDaTela = window.innerHeight * 0.7;

    this.animarScroll = this.animarScroll.bind(this);
  }

  animarScroll() {
    this.sections.forEach((section) => {
      const sectionTop =
        section.getBoundingClientRect().top - this.metadeDaTela;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animarScroll();
    window.addEventListener("scroll", this.animarScroll);
  }
}
