import"./assets/header-ec7a511b.js";import{S as r,N as c,P as u}from"./assets/vendor-6b8121bd.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".gallery-slide"),n=document.querySelector(".pagination-button.prev"),t=document.querySelector(".pagination-button.next");let e=0;function i(){o.forEach((s,a)=>{s.style.display=a===e?"block":"none"}),e===0?(n.style.opacity="0.5",n.disabled=!0):(n.style.opacity="1",n.disabled=!1),e===o.length-1?(t.style.opacity="0.5",t.disabled=!0):(t.style.opacity="1",t.disabled=!1)}n.addEventListener("click",()=>{e>0&&(e-=1,i())}),t.addEventListener("click",()=>{e<o.length-1&&(e+=1,i())}),i()});window.addEventListener("DOMContentLoaded",()=>{new r(".swiper",{modules:[c,u],slidesPerView:1,spaceBetween:16,centeredSlides:!1,clickable:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{spaceBetween:16},1200:{spaceBetween:16}}})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".fixed-header");document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const i=t.getAttribute("href").substring(1),s=document.getElementById(i);if(s){const a=o.offsetHeight,l=s.getBoundingClientRect(),d=window.scrollY+l.top-a;window.scrollTo({top:d,behavior:"smooth"})}})})});
//# sourceMappingURL=commonHelpers.js.map