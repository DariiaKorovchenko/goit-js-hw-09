!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i"),i=document.querySelector("form");i.addEventListener("submit",(function(e){e.preventDefault();var n=Number.parseInt(u.delay),t=1;c(t,n).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),t+=1,setInterval((function(){t<=u.amount&&(n+=Number.parseInt(u.step),c(t,n).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),t+=1)}),0)})),i.addEventListener("input",(function(e){u[e.target.name]=e.target.value}));var u={};function c(e,n){return new Promise((function(t,r){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}}();
//# sourceMappingURL=03-promises.8eb4f69f.js.map