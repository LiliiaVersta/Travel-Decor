import"./assets/header-71600c38.js";import{S as s,N as d,P as r}from"./assets/vendor-6b8121bd.js";document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".gallery-slide"),t=document.querySelector(".pagination-button.prev"),n=document.querySelector(".pagination-button.next");let e=0;function a(){i.forEach((l,o)=>{l.style.display=o===e?"block":"none"}),e===0?(t.style.opacity="0.5",t.disabled=!0):(t.style.opacity="1",t.disabled=!1),e===i.length-1?(n.style.opacity="0.5",n.disabled=!0):(n.style.opacity="1",n.disabled=!1)}t.addEventListener("click",()=>{e>0&&(e-=1,a())}),n.addEventListener("click",()=>{e<i.length-1&&(e+=1,a())}),a()});window.addEventListener("DOMContentLoaded",()=>{new s(".swiper",{modules:[d,r],slidesPerView:1,spaceBetween:16,centeredSlides:!1,clickable:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{spaceBetween:16},1200:{spaceBetween:16}}})});
//# sourceMappingURL=commonHelpers.js.map
