class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#mainContent" class="skip-link">Skip content</a>
          <header class="header">
              <div class="header__inner">
                  <button id="menu" class="header__menu">☰</button>
              </div>
              <nav id="drawer" class="nav">
              <ul class="nav__list">
                  <li class="nav__item"><a href="#/home">Home</a></li>
                  <li class="nav__item"><a href="#/like">Favorite</a></li>
                  <li class="nav__item"><a href="https://www.linkedin.com/in/isallkun" target="_blank" rel="noopener">Contact Us</a></li>
              </ul>
              </nav>
          </header>`;
  }
}

customElements.define('header-element', HeaderElement);
