import AnimacaoScroll from "./modules/animacao-scroll.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import funcionamento from "./modules/funcionamento.js";
import menuHamburguer from "./modules/menu-hamburguer.js";
import Modal from "./modules/modal.js";
import ScrollSuave from "./modules/smooth-scroll.js";
import TabNav from "./modules/tab-nav.js";
import Tooltip from "./modules/tooltip.js";

const animacaoScroll = new AnimacaoScroll('[data-animar="scroll"]');
animacaoScroll.init();

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

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

menuHamburguer();
funcionamento();
fetchAnimais("../../animais-api.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
