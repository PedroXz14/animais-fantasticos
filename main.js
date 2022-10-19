/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var i=n(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function h(t,e,n,i){var o=e&&e.prototype instanceof v?e:v,r=Object.create(o.prototype),a=new M(i||[]);return r._invoke=function(t,e,n){var i="suspendedStart";return function(o,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw r;return{value:void 0,done:!0}}for(n.method=o,n.arg=r;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=d(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),r}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f={};function v(){}function p(){}function y(){}var m={};l(m,s,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(T([])));g&&g!==n&&r.call(g,s)&&(m=g);var w=y.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,s,c){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==i(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;this._invoke=function(t,i){function r(){return new e((function(e,o){n(t,i,e,o)}))}return o=o?o.then(r,r):r()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var i=d(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=y,l(w,"constructor",y),l(y,"constructor",p),p.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,i,o,r){void 0===r&&(r=Promise);var a=new x(h(t,n,i,o),r);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),l(w,u,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},e.values=T,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var i=n(61)();t.exports=i;try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e){var n;return function(){for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,o),n=null}),e)}}var s=function(){function t(e){i(this,t),this.sections=document.querySelectorAll(e),this.metadeDaTela=.7*window.innerHeight,this.checkDistance=a(this.checkDistance.bind(this),50)}return r(t,[{key:"getDistance",value:function(){var t=this;this.distance=e(this.sections).map((function(e){var n=e.offsetTop;return{element:e,offset:Math.floor(n-t.metadeDaTela)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance),this}}]),t}();function c(t,e,n){var i=document.documentElement,o="data-outside";function r(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){i.removeEventListener(t,r)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return i.addEventListener(t,r)}))})),t.setAttribute(o,""))}var u=function(){function t(e){i(this,t),this.dropdownMenus=document.querySelectorAll(e),this.events=["touchstart","click"],this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}return r(t,[{key:"activeDropdownMenu",value:function(t){t.preventDefault();var e=t.currentTarget;e.classList.add("active"),c(e,this.events,(function(){e.classList.remove("active")}))}},{key:"addDropdownMenusEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropdownMenu)}))}))}},{key:"init",value:function(){return this.addDropdownMenusEvent(),this}}]),t}();function l(t,e,n,i,o,r,a){try{var s=t[r](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){l(r,i,o,a,s,"next",t)}function s(t){l(r,i,o,a,s,"throw",t)}a(void 0)}))}}var d=n(687),f=n.n(d),v=function(){function t(e,n,o){i(this,t),this.numeros=document.querySelectorAll(e),this.observerTarget=document.querySelector(n),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}return r(t,[{key:"animacaoNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animacaoNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=Number(t.innerText),n=Math.floor(e/100),i=0,o=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}]),t}(),p=function(){function t(e){i(this,t),this.funcionamento=document.querySelector(e)}return r(t,[{key:"dadosFunciomento",value:function(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=document.querySelector("[data-horario]").dataset.horario.split(",").map(Number)}},{key:"dadosAgora",value:function(){this.dataAtual=new Date,this.diaAtual=this.dataAtual.getDay(),this.horarioAtual=this.dataAtual.getUTCHours()-3}},{key:"isOpen",value:function(){return this.abertoNaSemana=-1!==this.diasSemana.indexOf(this.diaAtual),this.abertoNoHorario=this.horarioAtual>=this.horarioSemana[0]&&this.horarioAtual<this.horarioSemana[1],this.abertoNaSemana&&this.abertoNoHorario}},{key:"adicionarClasse",value:function(){this.isOpen()?this.funcionamento.classList.add("aberto"):this.funcionamento.classList.add("fechado")}},{key:"init",value:function(){return this.dadosFunciomento(),this.dadosAgora(),this.adicionarClasse(),this}}]),t}(),y=function(){function t(e,n){i(this,t),this.menuButton=document.querySelector(e),this.menuList=document.querySelector(n),this.events=["click","touchstart"],this.openMenu=this.openMenu.bind(this)}return r(t,[{key:"openMenu",value:function(t){var e=this;t.preventDefault(),this.menuButton.classList.add("active"),this.menuList.classList.add("active"),c(this.menuList,this.events,(function(){e.menuButton.classList.remove("active"),e.menuList.classList.remove("active")}))}},{key:"addMenuHamburguerEvents",value:function(){var t=this;this.events.forEach((function(e){t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.addMenuHamburguerEvents(),this}}]),t}(),m=function(){function t(e,n,o){i(this,t),this.botaoAbrir=document.querySelector(e),this.botaoFechar=document.querySelector(n),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.fecharModalClicandoFora=this.fecharModalClicandoFora.bind(this)}return r(t,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"fecharModalClicandoFora",value:function(t){t.target===this.containerModal&&this.toggleModal(t)}},{key:"addModalEvents",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.fecharModalClicandoFora)}},{key:"init",value:function(){return this.addModalEvents(),this}}]),t}();function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var x=function(){function t(e,n){i(this,t),this.slide=document.querySelector(e),this.wrapper=document.querySelector(n),this.distance={startX:0,finalPosition:0,movement:0},this.changeEvent=new Event("changeEvent")}return r(t,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform 0.3s ease-out":""}},{key:"updatePosition",value:function(t){return this.distance.movement=1.6*(this.distance.startX-t),this.distance.finalPosition-this.distance.movement}},{key:"moveSlide",value:function(t){this.distance.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.distance.startX=t.clientX,e="mousemove"):(this.distance.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,n=this.updatePosition(e);this.moveSlide(n)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slidesConfig(),t.changeSlide(t.index.active)}),1e3)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchstart";this.wrapper.removeEventListener(e,this.onMove),this.distance.finalPosition=this.distance.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.distance.movement>120&&void 0!==this.index.next?this.nextSlide():this.distance.movement<-120&&void 0!==this.index.prev?this.prevSlide():this.changeSlide(this.index.active)}},{key:"changeActiveClass",value:function(){this.slideArray.forEach((function(t){return t.element.classList.remove("active")})),this.slideArray[this.index.active].element.classList.add("active")}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slidesIndexNav(t),this.distance.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd),window.addEventListener("resize",this.onResize)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=e(this.slide.children).map((function(e){return{element:e,position:t.slidePosition(e)}}))}},{key:"slidesIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"prevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"nextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=a(this.onResize.bind(this),200),this.prevSlide=this.prevSlide.bind(this),this.nextSlide=this.nextSlide.bind(this)}},{key:"init",value:function(){return this.bindEvents(),this.addSlideEvents(),this.slidesConfig(),this.transition(!0),this.changeSlide(0),this}}]),t}();var k,L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(s,t);var n,o,a=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(o){var i=E(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return w(this,t)});function s(){var t;i(this,s);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=a.call.apply(a,[this].concat(n))).bindControlEvents(),t}return r(s,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.prevSlide),this.nextElement.addEventListener("click",this.nextSlide)}},{key:"createControl",value:function(){var t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide'.concat(n+1,'"></a></li>')})),this.wrapper.appendChild(t),t}},{key:"eventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){this.controlArray.forEach((function(t){return t.classList.remove("active")})),this.controlArray[this.index.active].classList.add("active")}},{key:"addControl",value:function(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=e(this.control.children),this.activeControlItem(),this.controlArray.forEach(this.eventControl)}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),s}(x),S=function(){function t(e,n){i(this,t),this.linksInternos=document.querySelectorAll(e),this.options=void 0===n?{behavior:"smooth",block:"start"}:n,this.scrollToSection=this.scrollToSection.bind(this)}return r(t,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.addLinkEvent(),this}}]),t}(),M=function(){function t(e,n){i(this,t),this.tabMenu=document.querySelectorAll(e),this.tabContent=document.querySelectorAll(n)}return r(t,[{key:"activeTab",value:function(t){this.tabContent.forEach((function(t){t.classList.remove("ativo")})),this.tabContent[t].classList.add("ativo",this.tabContent[t].dataset.animar)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.addTabNavEvent(),this}}]),t}(),T=function(){function t(e){i(this,t),this.tooltips=document.querySelectorAll(e),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return r(t,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"createTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"addTooltipEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.addTooltipEvent(),this}}]),t}();new s('[data-animar="scroll"]').init(),new S('.menu a[href^="#"]').init(),new M('[data-tab="menu"] li','[data-tab="content"] section').init(),new m('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new T("[data-tooltip]").init(),new u("[data-dropdown]").init(),new y('[data-menu="button"]','[data-menu="lista"]').init(),new p("[data-semana]").init(),function(t,e){var n=document.querySelector(".numeros-grid");function i(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function o(){return(o=h(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent.forEach((function(t){return i(t)})),new v("[data-numero]",".numeros","ativo").init();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}("./animais-api.json"),k=document.querySelector(".btc-preco"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){k.innerText=(1e3/t.BRL.sell).toFixed(4)}));var A=new L(".slide",".wrapper");A.init(),A.addControl(".custom-controls")})()})();