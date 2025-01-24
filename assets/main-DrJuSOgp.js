(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const r=this.getAttribute("data-name")||"Product Name",c=this.getAttribute("data-price")||"$0.00",o=this.getAttribute("data-image")||"",e=this.getAttribute("data-handle")||"#";this.shadowRoot.innerHTML=`
        <style>
          .product-card {
            display: flex;
            flex-direction: column;
            text-align: center;
            cursor: pointer;
          }
          .product-card img {
            max-width: 100%;
          }
          .product-card .price {
            color: #2a9d8f;
          }
          .product-card .name {
            font-size: 1.2rem;
            margin: 10px 0;
          }
        </style>
        <div class="product-card" onclick="window.location.href='/products/${e}'">
          <img src="${o}" alt="${r}">
          <div class="name">${r}</div>
          <p class="price">${c}</p>
        </div>
      `}}customElements.define("product-card",d);
