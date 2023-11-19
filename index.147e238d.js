(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),d=()=>{let o="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",d),o.addEventListener("click",d),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();//# sourceMappingURL=index.147e238d.js.map

//# sourceMappingURL=index.147e238d.js.map
