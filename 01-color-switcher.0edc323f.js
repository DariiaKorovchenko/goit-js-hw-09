function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e=document.querySelector("body"),r=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");r.addEventListener("click",(function(){e.style.backgroundColor=t(),r.setAttribute("disabled",""),o.hasAttribute("disabled","")&&o.removeAttribute("disabled","");d=setInterval((()=>{e.style.backgroundColor=t()}),1e3)})),o.addEventListener("click",(function(){o.setAttribute("disabled",""),r.removeAttribute("disabled",""),clearInterval(d)}));let d=null;
//# sourceMappingURL=01-color-switcher.0edc323f.js.map