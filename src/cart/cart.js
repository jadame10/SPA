import $ from 'jquery';

export class Cart {

  constructor() {
    this.key = 'IT_SPA_CART';

    if (!this.exists) {
      this.itSpaCart = [];
    }

    // cookieStore.addEventListener('change', event => console.warn(event));
  }

  

  get cookie() {
    const cookies = document.cookie.split(/\s*;\s*/);
    return cookies.find(cookie => cookie.startsWith(this.key));
  }

  get exists() {
    return this.cookie !== undefined;
  }

  get itSpaCart() {
    const cookieValue = this.cookie.substring(this.key.length + 1);
    const parsedValue = JSON.parse(cookieValue);

    return parsedValue;
  }

  set itSpaCart(value) {
    const stringifiedValue = JSON.stringify(value);
    document.cookie = `${this.key}=${stringifiedValue}`;
  }

  add(item) {
    this.itSpaCart = [...this.itSpaCart, item];
  }

  remove(item) {
    const cart = this.itSpaCart;
    const itemInCart = cart.find(({ name }) => name === item.name);

    if (itemInCart) {
      cart.splice(cart.indexOf(itemInCart), 1);
      this.itSpaCart = cart;
    }
  }

  empty() {
    this.itSpaCart = [];
  }
}
