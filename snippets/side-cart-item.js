const sideCartItemTemplate = `
  <style>
    .side-cart-item {
      display: block;
      color: #26231f;
      font: inherit;
      box-sizing: border-box;
    }

    .side-cart-item *,
    .side-cart-item *::before,
    .side-cart-item *::after {
      box-sizing: border-box;
    }

    .side-cart-item .item {
      display: grid;
      grid-template-columns: 88px minmax(0, 1fr);
      gap: 15px;
      padding: 18px 0;
      border-bottom: 1px solid #e9e6e0;
    }

    .side-cart-item .photo {
      width: 88px;
      height: 108px;
      overflow: hidden;
      border-radius: 8px;
      background: #f3f1ed;
    }

    .side-cart-item .photo img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .side-cart-item .body {
      display: flex;
      min-width: 0;
      flex-direction: column;
    }

    .side-cart-item .heading,
    .side-cart-item .controls {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .side-cart-item .title {
      color: inherit;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.4;
      text-decoration: none;
    }

    .side-cart-item .title[href]:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .side-cart-item .variant {
      margin: 5px 0 0;
      color: #77736d;
      font-size: 13px;
      line-height: 1.4;
    }

    .side-cart-item .price {
      flex: 0 0 auto;
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
    }

    .side-cart-item .controls {
      align-items: center;
      margin-top: auto;
      padding-top: 14px;
    }

    .side-cart-item .quantity {
      display: inline-flex;
      height: 34px;
      align-items: center;
      border: 1px solid #dedbd5;
      border-radius: 6px;
    }

    .side-cart-item .quantity button {
      width: 32px;
      height: 32px;
      border: 0;
      background: transparent;
      cursor: pointer;
      font: inherit;
      font-size: 18px;
      color: inherit;
    }

    .side-cart-item .count {
      min-width: 22px;
      text-align: center;
      font-size: 13px;
      font-variant-numeric: tabular-nums;
    }

    .side-cart-item .remove {
      padding: 5px 0;
      border: 0;
      background: transparent;
      color: #77736d;
      cursor: pointer;
      font: inherit;
      font-size: 12px;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .side-cart-item .remove:hover {
      color: #26231f;
    }

    .side-cart-item .title:focus-visible,
    .side-cart-item .remove:focus-visible,
    .side-cart-item .quantity button:focus-visible {
      outline: 2px solid #26231f;
      outline-offset: 3px;
    }

    @media (max-width: 360px) {
      .side-cart-item .item {
        grid-template-columns: 72px minmax(0, 1fr);
        gap: 12px;
      }

      .side-cart-item .photo {
        width: 72px;
        height: 92px;
      }
    }
  </style>

  <article class="side-cart-item">
    <div class="item">
      <div class="photo">
        <img
          class="image"
          src="https://placehold.co/88x108/f3f1ed/c7c1b8?text=Image"
          alt=""
          loading="lazy"
        >
      </div>

      <div class="body">
        <div class="heading">
          <div>
            <a class="title" href="#">Placeholder product</a>
            <p class="variant">Placeholder variant</p>
          </div>
          <span class="price">$0.00</span>
        </div>

        <div class="controls">
          <div class="quantity" aria-label="Item quantity">
            <button type="button" aria-label="Decrease quantity">−</button>
            <span class="count" aria-live="polite">1</span>
            <button type="button" aria-label="Increase quantity">+</button>
          </div>
          <button class="remove" type="button">Remove</button>
        </div>
      </div>
    </div>
  </article>
`;

export default sideCartItemTemplate;
