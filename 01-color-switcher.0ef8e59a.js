!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.setAttribute("disabled","disabled"),r=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),2e3)})),n.addEventListener("click",(function(){e.removeAttribute("disabled"),clearInterval(r)}));var r=null}();
//# sourceMappingURL=01-color-switcher.0ef8e59a.js.map