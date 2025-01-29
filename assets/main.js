class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Attach Shadow DOM
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return [
      'data-name',
      'data-price',
      'data-image',
      'data-description',
      'data-url'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render(); // Re-render on attribute change
  }

  render() {
    const name = this.getAttribute('data-name') || 'Product Name';
    const price = this.getAttribute('data-price') || '$0.00';
    const image = this.getAttribute('data-image') || '';
    const description = this.getAttribute('data-description') || 'No description available';
    const url = this.getAttribute('data-url') || '#';

    // Structure of the Product Card
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 300px;
          margin: 10px;
          box-sizing: border-box;
          cursor: pointer;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          transition: transform 0.3s ease;
          text-decoration: none;
        }
        .card{
          text-decoration:none;
        }
        .card:hover {
          transform: scale(1.05);
        }

        .image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .content {
          padding: 10px;
        }
        .card{
          text-decoration:none !important;
        }
        .name {
          font-size: 22px;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        .price {
          font-size: 1.1rem;
          color: #27ae60;
          margin-top: 8px;
        }

        .description {
          font-size: 1rem;
          color: #555;
          margin-top: 12px;
        }

        /* Accessibility: Focusable card */
        .ProductCard:focus {
          outline: 2px solid #ff9800;
        }

        @media (max-width: 600px) {
          .product-card-wrapper{
            padding:30px 0px !important;
          }
          :host {
            width: 100% !important;
          }
        }
      </style>

      <a href="${url}" class="card">
        <img src="${image}" alt="${name}" class="image" />
        <div class="content">
          <h2 class="name">${name}</h2>
          <p class="price">${price}</p>
        </div>
      </a>
    `;
  }
}

// Register the custom element
customElements.define('product-card', ProductCard);
