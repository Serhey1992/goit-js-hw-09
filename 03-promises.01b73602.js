!function(){var e=document.querySelector(".form"),n=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');function c(e){console.log(e)}function u(e){console.log(e)}function r(e,n){var o=Math.random()>.3;return new Promise((function(t,c){setTimeout((function(){o&&t("Fulfilled promise ".concat(e," in ").concat(n," ms")),c("Rejected promise ".concat(e," in ").concat(n," ms"))}),n)}))}e.addEventListener("submut",(function(e){e.preventDefault();for(var a=Number(n.value),m=0;m<t.value;m+=1)r(m,a).then(c).catch(u),a+=Number(o.value)}))}();
//# sourceMappingURL=03-promises.01b73602.js.map
