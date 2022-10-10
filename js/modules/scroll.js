export function scrollSuave() {
  const linksInternos = document.querySelectorAll(".menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

export function animacaoAoScroll() {
  const sections = document.querySelectorAll('[data-animar="scroll"]');
  const metadeDaTela = window.innerHeight * 0.7;

  function animarScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - metadeDaTela;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  animarScroll();
  window.addEventListener("scroll", animarScroll);
}
