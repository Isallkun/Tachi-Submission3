import 'regenerator-runtime'; /* for async await transpile */
import '../components/header';
import '../components/hero';
import '../components/section';
import '../components/footer';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/custom.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
