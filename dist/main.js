(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(){const e=document.createElement("input");e.classList.add("input-field-text"),e.placeholder="Name your project";const t=document.createElement("container");t.classList.add("btn-container");const n=document.createElement("button");n.textContent="Add";const d=document.createElement("button");d.textContent="Cancel",n.classList.add("add-btn"),d.classList.add("cancel-btn");const c=document.getElementById("input-field-container");c.classList.add("project-input-field-container"),c.appendChild(e),t.appendChild(n),t.appendChild(d),c.appendChild(t)}function d(e){let t=e,n=document.querySelector(".navbar-your-projects-container"),d=document.querySelector(".main-content-section-container"),c=document.createElement("div"),o=document.createElement("div");c.innerText=t,o.innerText=t,n.appendChild(c),d.appendChild(o)}e.r(t),e.d(t,{d:()=>n,s:()=>d}),console.log(t.userInputValue),document.getElementById("add-project-btn").addEventListener("click",(function(){n(),[...document.querySelectorAll(".add-btn")].at(-1).addEventListener("click",(e=>{let t=document.getElementsByClassName("input-field-text")[0].value;d(t);let n=document.getElementById("input-field-container");document.querySelector(".input-field-text").value===t&&(n.textContent="")})),document.querySelector(".cancel-btn").addEventListener("click",(function(){document.getElementById("input-field-container").textContent=""}))}))})();