import dropdown from "./modules/dropdown-menu.js";
import initFetchAnimais from "./modules/fetch-animais.js";
// import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import funcionamento from "./modules/funcionamento.js";
import menuHamburguer from "./modules/menu-hamburguer.js";
import Modal from "./modules/modal.js";
import { animacaoAoScroll, ScrollSuave } from "./modules/scroll.js";
import TabNav from "./modules/tab-nav.js";
import Tooltip from "./modules/tooltip.js";

animacaoAoScroll();

const scrollSuave = new ScrollSuave('.menu a[href^="#"]');
scrollSuave.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

dropdown();
menuHamburguer();
funcionamento();
initFetchAnimais();
// initFetchBitcoin();
