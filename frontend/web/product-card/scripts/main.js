class ProductCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const productName = this.getAttribute('data-name') || 'Product Name';
      const productPrice = this.getAttribute('data-price') || '$0.00';
      const productImage = this.getAttribute('data-image') || '';
      const productHandle = this.getAttribute('data-handle') || '#';
  
      this.shadowRoot.innerHTML = `
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
        <div class="product-card" onclick="window.location.href='/products/${productHandle}'">
          <img src="${productImage}" alt="${productName}">
          <div class="name">${productName}</div>
          <p class="price">${productPrice}</p>
        </div>
      `;
    }
  }
  
  customElements.define('product-card', ProductCard);
  