import AnimacaoScroll from "./modules/animacaoScroll.js";
import DropdownMenu from "./modules/dropdownMenu.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import Funcionamento from "./modules/funcionamento.js";
import MenuHamburguer from "./modules/menuHamburguer.js";
import Modal from "./modules/modal.js";
import SlideNav from "./modules/slideNav.js";
import ScrollSuave from "./modules/smoothScroll.js";
import TabNav from "./modules/tabNav.js";
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

const menuHamburguer = new MenuHamburguer(
  '[data-menu="button"]',
  '[data-menu="lista"]'
);
menuHamburguer.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();

fetchAnimais("./animais-api.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addControl(".custom-controls");
