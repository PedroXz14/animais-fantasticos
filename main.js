/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var r=n(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d={};function v(){}function p(){}function y(){}var m={};l(m,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==n&&i.call(b,s)&&(m=b);var w=y.prototype=v.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(o,a,s,u){var c=f(t[o],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==r(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=y,l(w,"constructor",y),l(y,"constructor",p),p.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},L(M.prototype),l(M.prototype,u,(function(){return this})),e.AsyncIterator=M,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new M(h(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(w),l(w,c,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var r=n(61)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function n(t){var r,o;e(this,n),this.sections=document.querySelectorAll(t),this.metadeDaTela=.7*window.innerHeight,this.checkDistance=(r=this.checkDistance.bind(this),50,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o&&clearTimeout(o),o=setTimeout((function(){r.apply(void 0,e),o=null}),50)})}return o(n,[{key:"getDistance",value:function(){var e,n=this;this.distance=(e=this.sections,function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=t.offsetTop;return{element:t,offset:Math.floor(e-n.metadeDaTela)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance),this}}]),n}();function a(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return r.addEventListener(t,i)}))})),t.setAttribute(o,""))}var s=function(){function t(n){e(this,t),this.dropdownMenus=document.querySelectorAll(n),this.events=["touchstart","click"],this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}return o(t,[{key:"activeDropdownMenu",value:function(t){t.preventDefault();var e=t.currentTarget;e.classList.add("active"),a(e,this.events,(function(){e.classList.remove("active")}))}},{key:"addDropdownMenusEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropdownMenu)}))}))}},{key:"init",value:function(){return this.addDropdownMenusEvent(),this}}]),t}();function u(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){u(i,r,o,a,s,"next",t)}function s(t){u(i,r,o,a,s,"throw",t)}a(void 0)}))}}var l,h,f,d,v,p,y,m,g,b=n(687),w=n.n(b),L=function(){function t(n,r,o){e(this,t),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(r),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}return o(t,[{key:"animacaoNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animacaoNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=Number(t.innerText),n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}]),t}(),M=function(){function t(n,r){e(this,t),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(r),this.events=["click","touchstart"],this.openMenu=this.openMenu.bind(this)}return o(t,[{key:"openMenu",value:function(){var t=this;this.menuButton.classList.add("active"),this.menuList.classList.add("active"),a(this.menuList,this.events,(function(){t.menuButton.classList.remove("active"),t.menuList.classList.remove("active")}))}},{key:"addMenuHamburguerEvents",value:function(){var t=this;this.events.forEach((function(e){t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.addMenuHamburguerEvents(),this}}]),t}(),x=function(){function t(n,r,o){e(this,t),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(r),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.fecharModalClicandoFora=this.fecharModalClicandoFora.bind(this)}return o(t,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"fecharModalClicandoFora",value:function(t){t.target===this.containerModal&&this.toggleModal(t)}},{key:"addModalEvents",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.fecharModalClicandoFora)}},{key:"init",value:function(){return this.addModalEvents(),this}}]),t}(),E=function(){function t(n,r){e(this,t),this.linksInternos=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return o(t,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.addLinkEvent(),this}}]),t}(),k=function(){function t(n,r){e(this,t),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(r)}return o(t,[{key:"activeTab",value:function(t){this.tabContent.forEach((function(t){t.classList.remove("ativo")})),this.tabContent[t].classList.add("ativo",this.tabContent[t].dataset.animar)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.addTabNavEvent(),this}}]),t}(),T=function(){function t(n){e(this,t),this.tooltips=document.querySelectorAll(n),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return o(t,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"createTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"addTooltipEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.addTooltipEvent(),this}}]),t}();new i('[data-animar="scroll"]').init(),new E('.menu a[href^="#"]').init(),new k('[data-tab="menu"] li','[data-tab="content"] section').init(),new x('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new T("[data-tooltip]").init(),new s("[data-dropdown]").init(),new M('[data-menu="button"]','[data-menu="lista"]').init(),h=document.querySelector("[data-semana]"),f=h.dataset.semana.split(",").map(Number),d=document.querySelector("[data-horario]").dataset.horario.split(",").map(Number),v=new Date,p=v.getDay(),y=v.getHours(),m=-1!==f.indexOf(p),g=y>=d[0]&&y<d[1],m&&g?h.classList.add("aberto"):h.classList.add("fechado"),function(t,e){var n=document.querySelector(".numeros-grid");function r(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function o(){return(o=c(w().mark((function e(){var n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent.forEach((function(t){return r(t)})),new L("[data-numero]",".numeros","ativo").init();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}("../../animais-api.json"),l=document.querySelector(".btc-preco"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){l.innerText=(100/t.BRL.sell).toFixed(4)}))})()})();