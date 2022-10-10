import dropdown from "./modules/dropdown-menu.js";
import initFetchAnimais from "./modules/fetch-animais.js";
// import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import funcionamento from "./modules/funcionamento.js";
import menuHamburguer from "./modules/menu-hamburguer.js";
import modal from "./modules/modal.js";
import { animacaoAoScroll, ScrollSuave } from "./modules/scroll.js";
import tabNav from "./modules/tab-nav.js";
import tooltip from "./modules/tooltip.js";

animacaoAoScroll();
const scrollSuave = new ScrollSuave('.menu a[href^="#"]');
scrollSuave.init();

tabNav();
modal();
tooltip();
dropdown();
menuHamburguer();
funcionamento();
initFetchAnimais();
// initFetchBitcoin();
