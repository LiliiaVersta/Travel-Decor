import"./assets/header-01972ec3.js";import{A as l,S as c,N as d,P as u}from"./assets/vendor-f5260eb8.js";const s="../img/icons.svg";document.addEventListener("DOMContentLoaded",function(){new l(".accordion-container",{duration:300,elementClass:"faq-item",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",showMultiple:!0,beforeOpen:e=>{e.querySelector(".icon-answer use").setAttribute("href",`${s}#icon-arrow-up`)},beforeClose:e=>{e.querySelector(".icon-answer use").setAttribute("href",`${s}#icon-arrow-down`)}})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".gallery-slide"),t=document.querySelector(".pagination-button.prev"),i=document.querySelector(".pagination-button.next");let n=0;function o(){e.forEach((a,r)=>{a.style.display=r===n?"block":"none"}),n===0?(t.style.opacity="0.5",t.disabled=!0):(t.style.opacity="1",t.disabled=!1),n===e.length-1?(i.style.opacity="0.5",i.disabled=!0):(i.style.opacity="1",i.disabled=!1)}t.addEventListener("click",()=>{n>0&&(n-=1,o())}),i.addEventListener("click",()=>{n<e.length-1&&(n+=1,o())}),o()});window.addEventListener("DOMContentLoaded",()=>{new c(".swiper",{modules:[d,u],slidesPerView:1,spaceBetween:16,centeredSlides:!1,loop:!0,clickable:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{spaceBetween:16},1200:{spaceBetween:16}}})});
//# sourceMappingURL=commonHelpers.js.map
